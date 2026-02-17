/** @jsx jsx */
import { React, jsx, css, Immutable } from 'jimu-core';
import { AllWidgetSettingProps } from 'jimu-for-builder';
import { 
  Switch, 
  Select, 
  NumericInput, 
  ColorPicker,
  SettingSection,
  SettingRow
} from 'jimu-ui/advanced/setting-components';
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components';

export default class Setting extends React.PureComponent<AllWidgetSettingProps<any>> {
  
  onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds
    });
  };

  onPropertyChange = (property: string, value: any) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(property, value)
    });
  };

  render() {
    const { config } = this.props;
    const translate = this.props.intl.formatMessage;

    const sectionStyle = css`
      margin-bottom: 16px;
    `;

    return (
      <div css={css`padding: 16px; height: 100%; overflow-y: auto;`}>
        
        {/* Map Widget Selection */}
        <SettingSection title="Map Widget">
          <SettingRow>
            <MapWidgetSelector
              onSelect={this.onMapWidgetSelected}
              useMapWidgetIds={this.props.useMapWidgetIds}
            />
          </SettingRow>
        </SettingSection>

        {/* Display Settings */}
        <SettingSection 
          title={translate({ id: 'displaySettings' })}
          css={sectionStyle}
        >
          <SettingRow 
            label={translate({ id: 'showLegend' })}
            title={translate({ id: 'showLegendDesc' })}
          >
            <Switch
              checked={config.showLegend}
              onChange={(e) => this.onPropertyChange('showLegend', e.target.checked)}
            />
          </SettingRow>

          {config.showLegend && (
            <SettingRow label={translate({ id: 'legendPosition' })}>
              <Select
                value={config.legendPosition}
                onChange={(e) => this.onPropertyChange('legendPosition', e.target.value)}
              >
                <option value="inline">
                  {translate({ id: 'legendPositionInline' })}
                </option>
                <option value="below">
                  {translate({ id: 'legendPositionBelow' })}
                </option>
              </Select>
            </SettingRow>
          )}

          <SettingRow 
            label={translate({ id: 'showVisibilityToggle' })}
            title={translate({ id: 'showVisibilityToggleDesc' })}
          >
            <Switch
              checked={config.showVisibilityToggle}
              onChange={(e) => this.onPropertyChange('showVisibilityToggle', e.target.checked)}
            />
          </SettingRow>

          <SettingRow 
            label={translate({ id: 'showOpacitySlider' })}
            title={translate({ id: 'showOpacitySliderDesc' })}
          >
            <Switch
              checked={config.showOpacitySlider}
              onChange={(e) => this.onPropertyChange('showOpacitySlider', e.target.checked)}
            />
          </SettingRow>
        </SettingSection>

        {/* Text Size Settings */}
        <SettingSection 
          title={translate({ id: 'legendSettings' })}
          css={sectionStyle}
        >
          <SettingRow label={translate({ id: 'layerNameSize' })}>
            <NumericInput
              value={config.layerNameSize}
              min={10}
              max={24}
              step={1}
              onChange={(value) => this.onPropertyChange('layerNameSize', value)}
              style={{ width: '100%' }}
            />
          </SettingRow>

          <SettingRow label={translate({ id: 'legendSize' })}>
            <NumericInput
              value={config.legendSize}
              min={8}
              max={20}
              step={1}
              onChange={(value) => this.onPropertyChange('legendSize', value)}
              style={{ width: '100%' }}
            />
          </SettingRow>

          <SettingRow label={translate({ id: 'iconSize' })}>
            <NumericInput
              value={config.iconSize}
              min={12}
              max={32}
              step={1}
              onChange={(value) => this.onPropertyChange('iconSize', value)}
              style={{ width: '100%' }}
            />
          </SettingRow>
        </SettingSection>

        {/* Style Settings */}
        <SettingSection 
          title={translate({ id: 'styleSettings' })}
          css={sectionStyle}
        >
          <SettingRow label={translate({ id: 'backgroundColor' })}>
            <ColorPicker
              color={config.backgroundColor}
              onChange={(color) => this.onPropertyChange('backgroundColor', color)}
            />
          </SettingRow>

          <SettingRow label={translate({ id: 'textColor' })}>
            <ColorPicker
              color={config.textColor}
              onChange={(color) => this.onPropertyChange('textColor', color)}
            />
          </SettingRow>

          <SettingRow label={translate({ id: 'hoverColor' })}>
            <ColorPicker
              color={config.hoverColor}
              onChange={(color) => this.onPropertyChange('hoverColor', color)}
            />
          </SettingRow>

          <SettingRow label={translate({ id: 'borderColor' })}>
            <ColorPicker
              color={config.borderColor}
              onChange={(color) => this.onPropertyChange('borderColor', color)}
            />
          </SettingRow>

          <SettingRow label={translate({ id: 'borderRadius' })}>
            <NumericInput
              value={config.borderRadius}
              min={0}
              max={20}
              step={1}
              onChange={(value) => this.onPropertyChange('borderRadius', value)}
              style={{ width: '100%' }}
            />
          </SettingRow>

          <SettingRow label={translate({ id: 'spacing' })}>
            <NumericInput
              value={config.spacing}
              min={0}
              max={24}
              step={2}
              onChange={(value) => this.onPropertyChange('spacing', value)}
              style={{ width: '100%' }}
            />
          </SettingRow>
        </SettingSection>

        {/* Advanced Settings */}
        <SettingSection 
          title={translate({ id: 'advancedSettings' })}
          css={sectionStyle}
        >
          <SettingRow 
            label={translate({ id: 'enableSearch' })}
            title={translate({ id: 'enableSearchDesc' })}
          >
            <Switch
              checked={config.enableSearch}
              onChange={(e) => this.onPropertyChange('enableSearch', e.target.checked)}
            />
          </SettingRow>

          <SettingRow 
            label={translate({ id: 'enableGrouping' })}
            title={translate({ id: 'enableGroupingDesc' })}
          >
            <Switch
              checked={config.enableGrouping}
              onChange={(e) => this.onPropertyChange('enableGrouping', e.target.checked)}
            />
          </SettingRow>

          <SettingRow 
            label={translate({ id: 'compactMode' })}
            title={translate({ id: 'compactModeDesc' })}
          >
            <Switch
              checked={config.compactMode}
              onChange={(e) => this.onPropertyChange('compactMode', e.target.checked)}
            />
          </SettingRow>
        </SettingSection>

      </div>
    );
  }
}
