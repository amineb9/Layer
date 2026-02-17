/** @jsx jsx */
import { React, type AllWidgetProps, jsx } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { Icon, Button, TextInput, Tooltip, Slider } from 'jimu-ui'
import type { IMLayerManagerConfig } from '../config'
import defaultMessages from './translations/default'

const { useState, useEffect, useCallback } = React

interface WidgetProps extends AllWidgetProps<IMLayerManagerConfig> {}

const Widget: React.FC<WidgetProps> = (props) => {
  const { config, useMapWidgetIds, intl } = props
  
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>(null)
  const [layers, setLayers] = useState<any[]>([])
  const [filteredLayers, setFilteredLayers] = useState<any[]>([])
  const [searchText, setSearchText] = useState('')
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set())
  const [selectedLayer, setSelectedLayer] = useState<string>(null)
  const [draggedLayer, setDraggedLayer] = useState<any>(null)
  
  const translate = useCallback((id: string, values?: any) => {
    return intl?.formatMessage({ id, defaultMessage: defaultMessages[id] }, values) || defaultMessages[id]
  }, [intl])

  // Gestion de la vue de carte
  const onActiveViewChange = useCallback((jmv: JimuMapView) => {
    if (jmv) {
      setJimuMapView(jmv)
    }
  }, [])

  // Chargement des couches depuis la carte
  useEffect(() => {
    if (!jimuMapView?.view) return

    const loadLayers = async () => {
      const view = jimuMapView.view
      const map = view.map
      
      if (!map) return

      const layerList: any[] = []
      
      // Parcourir toutes les couches
      map.allLayers.forEach((layer: any) => {
        if (layer.visible !== undefined) {
          layerList.push({
            id: layer.id,
            title: layer.title || 'Unnamed Layer',
            visible: layer.visible,
            opacity: layer.opacity || 1,
            layer: layer,
            type: layer.type,
            legendEnabled: layer.legendEnabled !== false
          })
        }
      })

      setLayers(layerList)
      setFilteredLayers(layerList)
    }

    loadLayers()

    // Écouter les changements de couches
    const handle = jimuMapView.view.map.allLayers.on('change', loadLayers)
    
    return () => {
      handle?.remove()
    }
  }, [jimuMapView])

  // Filtrage des couches par recherche
  useEffect(() => {
    if (!searchText.trim()) {
      setFilteredLayers(layers)
    } else {
      const filtered = layers.filter(layer =>
        layer.title.toLowerCase().includes(searchText.toLowerCase())
      )
      setFilteredLayers(filtered)
    }
  }, [searchText, layers])

  // Gestion de la visibilité d'une couche
  const toggleLayerVisibility = useCallback((layerId: string) => {
    const layer = layers.find(l => l.id === layerId)
    if (layer?.layer) {
      layer.layer.visible = !layer.layer.visible
      setLayers([...layers])
    }
  }, [layers])

  // Gestion de l'opacité d'une couche
  const changeLayerOpacity = useCallback((layerId: string, opacity: number) => {
    const layer = layers.find(l => l.id === layerId)
    if (layer?.layer) {
      layer.layer.opacity = opacity
      setLayers([...layers])
    }
  }, [layers])

  // Zoom sur une couche
  const zoomToLayer = useCallback(async (layerId: string) => {
    const layer = layers.find(l => l.id === layerId)
    if (layer?.layer && jimuMapView?.view) {
      try {
        const extent = await layer.layer.queryExtent()
        if (extent?.extent) {
          await jimuMapView.view.goTo(extent.extent.expand(1.2))
        }
      } catch (error) {
        console.error('Error zooming to layer:', error)
      }
    }
  }, [layers, jimuMapView])

  // Rendu d'un élément de légende
  const renderLegend = useCallback((layer: any) => {
    if (!config.showLegend || !layer.legendEnabled) return null

    const legendStyle: React.CSSProperties = {
      fontSize: `${config.legendSize}px`,
      marginTop: config.legendPosition === 'below' ? '4px' : '0',
      marginLeft: config.legendPosition === 'inline' ? '8px' : '0',
      display: config.legendPosition === 'inline' ? 'inline-flex' : 'block',
      alignItems: 'center'
    }

    return (
      <div style={legendStyle} className="layer-legend">
        <Icon icon="legend" size={config.legendSize} color={config.textColor} />
      </div>
    )
  }, [config])

  // Rendu d'une couche
  const renderLayer = useCallback((layer: any, index: number) => {
    const isSelected = selectedLayer === layer.id
    const isCompact = config.compactMode

    const layerStyle: React.CSSProperties = {
      padding: `${config.layerItemPadding}px`,
      minHeight: isCompact ? `${config.layerItemHeight * 0.7}px` : `${config.layerItemHeight}px`,
      backgroundColor: isSelected ? config.activeLayerColor : 'transparent',
      color: isSelected ? '#ffffff' : config.textColor,
      borderBottom: `1px solid ${config.borderColor}`,
      cursor: 'pointer',
      transition: 'all 0.2s',
      fontSize: `${config.fontSize}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: config.legendPosition === 'below' ? 'wrap' : 'nowrap'
    }

    const layerNameStyle: React.CSSProperties = {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      overflow: 'hidden',
      width: config.legendPosition === 'below' ? '100%' : 'auto'
    }

    return (
      <div
        key={layer.id}
        style={layerStyle}
        className="layer-item"
        onClick={() => setSelectedLayer(isSelected ? null : layer.id)}
        onMouseEnter={(e) => {
          if (!isSelected) {
            e.currentTarget.style.backgroundColor = config.hoverColor
          }
        }}
        onMouseLeave={(e) => {
          if (!isSelected) {
            e.currentTarget.style.backgroundColor = 'transparent'
          }
        }}
        draggable={config.allowReorder}
        onDragStart={() => setDraggedLayer(layer)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => {
          if (draggedLayer && draggedLayer.id !== layer.id) {
            const newLayers = [...layers]
            const dragIndex = newLayers.findIndex(l => l.id === draggedLayer.id)
            const dropIndex = newLayers.findIndex(l => l.id === layer.id)
            const [removed] = newLayers.splice(dragIndex, 1)
            newLayers.splice(dropIndex, 0, removed)
            setLayers(newLayers)
          }
          setDraggedLayer(null)
        }}
      >
        <div style={layerNameStyle}>
          {config.showVisibilityToggle && (
            <Tooltip title={translate('tooltipVisibility')} placement="top">
              <Button
                type="tertiary"
                size={isCompact ? 'sm' : 'default'}
                icon
                onClick={(e) => {
                  e.stopPropagation()
                  toggleLayerVisibility(layer.id)
                }}
              >
                <Icon
                  icon={layer.visible ? 'eye' : 'eye-slash'}
                  size={isCompact ? 12 : 14}
                  color={isSelected ? '#ffffff' : config.textColor}
                />
              </Button>
            </Tooltip>
          )}
          
          <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {layer.title}
          </span>
          
          {config.legendPosition === 'inline' && renderLegend(layer)}
        </div>

        {config.legendPosition === 'below' && renderLegend(layer)}

        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          {config.enableLayerActions && (
            <React.Fragment>
              <Tooltip title={translate('tooltipZoom')} placement="top">
                <Button
                  type="tertiary"
                  size={isCompact ? 'sm' : 'default'}
                  icon
                  onClick={(e) => {
                    e.stopPropagation()
                    zoomToLayer(layer.id)
                  }}
                >
                  <Icon
                    icon="magnifier"
                    size={isCompact ? 12 : 14}
                    color={isSelected ? '#ffffff' : config.textColor}
                  />
                </Button>
              </Tooltip>

              {config.showLayerInfo && (
                <Tooltip title={translate('tooltipInfo')} placement="top">
                  <Button
                    type="tertiary"
                    size={isCompact ? 'sm' : 'default'}
                    icon
                  >
                    <Icon
                      icon="information"
                      size={isCompact ? 12 : 14}
                      color={isSelected ? '#ffffff' : config.textColor}
                    />
                  </Button>
                </Tooltip>
              )}
            </React.Fragment>
          )}
        </div>

        {config.showOpacitySlider && isSelected && (
          <div style={{ width: '100%', marginTop: '8px' }}>
            <Tooltip title={translate('tooltipOpacity')} placement="top">
              <Slider
                value={layer.opacity}
                onChange={(value) => changeLayerOpacity(layer.id, value)}
                min={0}
                max={1}
                step={0.1}
                size="sm"
              />
            </Tooltip>
          </div>
        )}
      </div>
    )
  }, [config, selectedLayer, translate, toggleLayerVisibility, zoomToLayer, changeLayerOpacity, renderLegend, draggedLayer, layers])

  // Style du conteneur principal
  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundColor: config.backgroundColor,
    color: config.textColor,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  }

  const headerStyle: React.CSSProperties = {
    padding: '12px',
    borderBottom: `1px solid ${config.borderColor}`,
    fontWeight: 'bold',
    fontSize: `${config.fontSize + 2}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

  const layersContainerStyle: React.CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden'
  }

  return (
    <div css={containerStyle} className="widget-layer-manager">
      {useMapWidgetIds && useMapWidgetIds.length > 0 ? (
        <React.Fragment>
          <JimuMapViewComponent
            useMapWidgetId={useMapWidgetIds[0]}
            onActiveViewChange={onActiveViewChange}
          />
          
          <div style={headerStyle}>
            <span>{translate('layers')}</span>
            {config.showLayerCount && (
              <span style={{ fontSize: `${config.fontSize}px`, fontWeight: 'normal', opacity: 0.7 }}>
                {translate('layerCount', { count: filteredLayers.length })}
              </span>
            )}
          </div>

          {config.enableSearch && (
            <div style={{ padding: '8px' }}>
              <TextInput
                placeholder={translate('search')}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                prefix={<Icon icon="search" size={14} />}
                allowClear
              />
            </div>
          )}

          <div style={layersContainerStyle}>
            {filteredLayers.length > 0 ? (
              filteredLayers.map((layer, index) => renderLayer(layer, index))
            ) : (
              <div style={{ padding: '20px', textAlign: 'center', opacity: 0.6 }}>
                {searchText ? translate('searchNoResults') : translate('noLayers')}
              </div>
            )}
          </div>
        </React.Fragment>
      ) : (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          {translate('noMapSelected')}
        </div>
      )}
    </div>
  )
}

export default Widget
