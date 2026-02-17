/** @jsx jsx */
import { React, AllWidgetProps, jsx, css } from 'jimu-core';
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import { Icon, Button, TextInput, Collapse, Slider } from 'jimu-ui';

interface State {
  jimuMapView: JimuMapView;
  layers: any[];
  searchText: string;
  expandedLayers: Set<string>;
}

export default class Widget extends React.PureComponent<AllWidgetProps<any>, State> {
  private legendElements: Map<string, HTMLDivElement> = new Map();

  constructor(props) {
    super(props);
    this.state = {
      jimuMapView: null,
      layers: [],
      searchText: '',
      expandedLayers: new Set()
    };
  }

  componentDidUpdate(prevProps: AllWidgetProps<any>) {
    if (prevProps.config !== this.props.config && this.state.jimuMapView) {
      this.updateLegends();
    }
  }

  onActiveViewChange = (jimuMapView: JimuMapView) => {
    if (jimuMapView) {
      this.setState({ jimuMapView }, () => {
        this.loadLayers();
        this.watchLayerChanges();
      });
    }
  };

  watchLayerChanges = () => {
    const { jimuMapView } = this.state;
    if (!jimuMapView?.view) return;

    jimuMapView.view.map.allLayers.on('change', () => {
      this.loadLayers();
    });
  };

  loadLayers = () => {
    const { jimuMapView } = this.state;
    if (!jimuMapView?.view) return;

    const allLayers = jimuMapView.view.map.allLayers.toArray();
    const operationalLayers = allLayers.filter(layer => 
      layer.listMode !== 'hide' && 
      layer.type !== 'base-tile' &&
      layer.type !== 'vector-tile' &&
      !layer.isBasemap
    );

    this.setState({ layers: operationalLayers }, () => {
      this.updateLegends();
    });
  };

  updateLegends = async () => {
    const { layers } = this.state;
    const { config } = this.props;

    if (!config.showLegend) return;

    for (const layer of layers) {
      if (layer.visible && this.legendElements.has(layer.id)) {
        await this.createLegend(layer, this.legendElements.get(layer.id));
      }
    }
  };

  createLegend = async (layer: any, container: HTMLDivElement) => {
    if (!container || !this.state.jimuMapView?.view) return;

    const Legend = (await import('esri/widgets/Legend')).default;
    container.innerHTML = '';

    try {
      new Legend({
        view: this.state.jimuMapView.view,
        layerInfos: [{
          layer: layer,
          title: ''
        }],
        container: container,
        style: {
          type: 'card',
          layout: this.props.config.legendPosition === 'inline' ? 'side-by-side' : 'stack'
        }
      });
    } catch (error) {
      console.warn(`Could not create legend for ${layer.title}:`, error);
    }
  };

  toggleLayerVisibility = (layer: any) => {
    layer.visible = !layer.visible;
    this.forceUpdate();
  };

  updateLayerOpacity = (layer: any, opacity: number) => {
    layer.opacity = opacity;
    this.forceUpdate();
  };

  toggleLayerExpanded = (layerId: string) => {
    const { expandedLayers } = this.state;
    const newExpanded = new Set(expandedLayers);
    
    if (newExpanded.has(layerId)) {
      newExpanded.delete(layerId);
    } else {
      newExpanded.add(layerId);
    }
    
    this.setState({ expandedLayers: newExpanded });
  };

  expandAll = () => {
    const allIds = this.state.layers.map(l => l.id);
    this.setState({ expandedLayers: new Set(allIds) });
  };

  collapseAll = () => {
    this.setState({ expandedLayers: new Set() });
  };

  getFilteredLayers = () => {
    const { layers, searchText } = this.state;
    if (!searchText) return layers;

    return layers.filter(layer => 
      layer.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  renderLayer = (layer: any) => {
    const { config } = this.props;
    const { expandedLayers } = this.state;
    const isExpanded = expandedLayers.has(layer.id);
    const translate = this.props.intl.formatMessage;

    const layerStyle = css`
      border: 1px solid ${config.borderColor};
      border-radius: ${config.borderRadius}px;
      margin-bottom: ${config.compactMode ? config.spacing / 2 : config.spacing}px;
      background: ${config.backgroundColor};
      overflow: hidden;
      transition: all 0.2s ease;

      &:hover {
        background: ${config.hoverColor};
      }
    `;

    const headerStyle = css`
      display: flex;
      align-items: center;
      padding: ${config.compactMode ? 6 : 10}px;
      cursor: pointer;
      gap: 8px;
    `;

    const titleStyle = css`
      flex: 1;
      font-size: ${config.layerNameSize}px;
      color: ${config.textColor};
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `;

    const legendContainerStyle = css`
      padding: ${config.legendPosition === 'inline' ? '0 10px' : '0 10px 10px 10px'};
      
      .esri-legend {
        background: transparent !important;
      }
      
      .esri-legend__layer {
        padding: 0 !important;
        margin: 0 !important;
      }
      
      .esri-legend__layer-caption {
        display: none !important;
      }
      
      .esri-legend__service {
        padding: 0 !important;
      }
      
      .esri-legend__layer-body {
        padding: ${config.legendPosition === 'inline' ? '0' : '5px 0 0 0'} !important;
      }
      
      .esri-legend__layer-cell {
        font-size: ${config.legendSize}px !important;
      }
      
      .esri-legend__symbol {
        width: ${config.iconSize}px !important;
        height: ${config.iconSize}px !important;
      }
    `;

    const controlsStyle = css`
      padding: 0 10px 10px 10px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    `;

    return (
      <div key={layer.id} css={layerStyle}>
        <div 
          css={headerStyle}
          onClick={() => this.toggleLayerExpanded(layer.id)}
        >
          <Icon
            icon={isExpanded ? 'down' : 'right'}
            size={12}
            color={config.textColor}
          />
          
          {config.showVisibilityToggle && (
            <Button
              icon={layer.visible ? 'view-visible' : 'view-hidden'}
              type="tertiary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                this.toggleLayerVisibility(layer);
              }}
              title={translate({ id: layer.visible ? 'visible' : 'hidden' })}
            />
          )}
          
          <div css={titleStyle} title={layer.title}>
            {layer.title}
          </div>
        </div>

        <Collapse isOpen={isExpanded}>
          {config.showLegend && layer.visible && (
            <div 
              css={legendContainerStyle}
              ref={(ref) => {
                if (ref) {
                  this.legendElements.set(layer.id, ref);
                  this.createLegend(layer, ref);
                }
              }}
            />
          )}

          {config.showOpacitySlider && (
            <div css={controlsStyle}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                fontSize: `${config.legendSize}px`,
                color: config.textColor
              }}>
                <span style={{ minWidth: '60px' }}>
                  {translate({ id: 'opacity' })}:
                </span>
                <Slider
                  min={0}
                  max={1}
                  step={0.1}
                  value={layer.opacity}
                  onChange={(value) => this.updateLayerOpacity(layer, value)}
                  style={{ flex: 1 }}
                />
                <span style={{ minWidth: '40px', textAlign: 'right' }}>
                  {Math.round(layer.opacity * 100)}%
                </span>
              </div>
            </div>
          )}
        </Collapse>
      </div>
    );
  };

  render() {
    const { config, useMapWidgetIds } = this.props;
    const { searchText, layers } = this.state;
    const translate = this.props.intl.formatMessage;
    const filteredLayers = this.getFilteredLayers();

    const containerStyle = css`
      width: 100%;
      height: 100%;
      padding: 12px;
      overflow-y: auto;
      background: ${config.backgroundColor};
      
      &::-webkit-scrollbar {
        width: 8px;
      }
      
      &::-webkit-scrollbar-track {
        background: rgba(0,0,0,0.05);
        border-radius: 4px;
      }
      
      &::-webkit-scrollbar-thumb {
        background: rgba(0,0,0,0.2);
        border-radius: 4px;
        
        &:hover {
          background: rgba(0,0,0,0.3);
        }
      }
    `;

    const toolbarStyle = css`
      display: flex;
      gap: 8px;
      margin-bottom: 12px;
      flex-wrap: wrap;
    `;

    const headerStyle = css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid ${config.borderColor};
    `;

    const countStyle = css`
      font-size: 12px;
      color: ${config.textColor};
      opacity: 0.7;
    `;

    return (
      <div css={css`width: 100%; height: 100%; position: relative;`}>
        <JimuMapViewComponent
          useMapWidgetId={useMapWidgetIds?.[0]}
          onActiveViewChange={this.onActiveViewChange}
        />

        <div css={containerStyle}>
          {config.enableSearch && (
            <div css={toolbarStyle}>
              <TextInput
                type="text"
                placeholder={translate({ id: 'searchPlaceholder' })}
                value={searchText}
                onChange={(e) => this.setState({ searchText: e.target.value })}
                prefix={<Icon icon="search" size={14} />}
                allowClear
                style={{ flex: 1 }}
              />
            </div>
          )}

          <div css={headerStyle}>
            <span css={countStyle}>
              {translate({ id: 'layerCount' }, { count: filteredLayers.length })}
            </span>
            <div style={{ display: 'flex', gap: '4px' }}>
              <Button
                type="tertiary"
                size="sm"
                onClick={this.expandAll}
                title={translate({ id: 'expandAll' })}
              >
                {translate({ id: 'expandAll' })}
              </Button>
              <Button
                type="tertiary"
                size="sm"
                onClick={this.collapseAll}
                title={translate({ id: 'collapseAll' })}
              >
                {translate({ id: 'collapseAll' })}
              </Button>
            </div>
          </div>

          {filteredLayers.length === 0 ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '40px 20px',
              color: config.textColor,
              opacity: 0.6
            }}>
              {searchText ? translate({ id: 'noResults' }) : translate({ id: 'noLayers' })}
            </div>
          ) : (
            filteredLayers.map(layer => this.renderLayer(layer))
          )}
        </div>
      </div>
    );
  }
}
