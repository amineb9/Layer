/** @jsx jsx */
import {
  React,
  jsx,
  type ImmutableObject,
  Immutable
} from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import {
  SettingSection,
  SettingRow,
  MapWidgetSelector
} from 'jimu-ui/advanced/setting-components'
import {
  Switch,
  NumericInput,
  Select,
  Label,
  Tabs,
  Tab
} from 'jimu-ui'
import { ThemeColorPicker } from 'jimu-ui/basic/color-picker'
import type { IMLayerManagerConfig } from '../config'
import defaultMessages from './translations/default'

const { useState } = React

interface SettingProps extends AllWidgetSettingProps<IMLayerManagerConfig> {}

const Setting: React.FC<SettingProps> = (props) => {
  const { config, onSettingChange, useMapWidgetIds, intl } = props
  const [activeTab, setActiveTab] = useState('general')

  const translate = (id: string) => {
    return intl?.formatMessage({ id, defaultMessage: defaultMessages[id] }) || defaultMessages[id]
  }

  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds
    })
  }

  const updateConfig = (key: string, value: any) => {
    onSettingChange({
      id: props.id,
      config: config.set(key, value)
    })
  }

  return (
    <div className="widget-setting-layer-manager" style={{ height: '100%' }}>
      <SettingSection>
        <SettingRow>
          <Label>
            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
              {translate('selectMap')}
            </div>
          </Label>
        </SettingRow>
        <SettingRow>
          <MapWidgetSelector
            onSelect={onMapWidgetSelected}
            useMapWidgetIds={useMapWidgetIds}
          />
        </SettingRow>
      </SettingSection>

      <Tabs
        type="underline"
        value={activeTab}
        onChange={setActiveTab}
        fill
      >
        <Tab id="general" title={translate('generalSettings')}>
          <SettingSection title={translate('appearanceSettings')}>
            <SettingRow label={translate('backgroundColor')}>
              <ThemeColorPicker
                specificTheme={props.theme2}
                value={config.backgroundColor}
                onChange={(color) => updateConfig('backgroundColor', color)}
              />
            </SettingRow>

            <SettingRow label={translate('textColor')}>
              <ThemeColorPicker
                specificTheme={props.theme2}
                value={config.textColor}
                onChange={(color) => updateConfig('textColor', color)}
              />
            </SettingRow>

            <SettingRow label={translate('fontSize')}>
              <NumericInput
                value={config.fontSize}
                onChange={(value) => updateConfig('fontSize', value)}
                min={10}
                max={24}
                step={1}
                style={{ width: '100%' }}
              />
            </SettingRow>
          </SettingSection>
        </Tab>

        <Tab id="legend" title={translate('legendSettings')}>
          <SettingSection>
            <SettingRow label={translate('showLegendOption')}>
              <Switch
                checked={config.showLegend}
                onChange={(e) => updateConfig('showLegend', e.target.checked)}
              />
            </SettingRow>

            {config.showLegend && (
              <>
                <SettingRow label={translate('legendPosition')}>
                  <Select
                    value={config.legendPosition}
                    onChange={(e) => updateConfig('legendPosition', e.target.value)}
                    style={{ width: '100%' }}
                  >
                    <option value="inline">{translate('legendPositionInline')}</option>
                    <option value="below">{translate('legendPositionBelow')}</option>
                  </Select>
                </SettingRow>

                <SettingRow label={translate('legendSize')}>
                  <NumericInput
                    value={config.legendSize}
                    onChange={(value) => updateConfig('legendSize', value)}
                    min={12}
                    max={32}
                    step={2}
                    style={{ width: '100%' }}
                  />
                </SettingRow>
              </>
            )}
          </SettingSection>
        </Tab>

        <Tab id="display" title={translate('displayOptions')}>
          <SettingSection>
            <SettingRow label={translate('showLayerCount')}>
              <Switch
                checked={config.showLayerCount}
                onChange={(e) => updateConfig('showLayerCount', e.target.checked)}
              />
            </SettingRow>

            <SettingRow label={translate('enableSearch')}>
              <Switch
                checked={config.enableSearch}
                onChange={(e) => updateConfig('enableSearch', e.target.checked)}
              />
            </SettingRow>

            <SettingRow label={translate('enableGrouping')}>
              <Switch
                checked={config.enableGrouping}
                onChange={(e) => updateConfig('enableGrouping', e.target.checked)}
              />
            </SettingRow>

            <SettingRow label={translate('showVisibilityToggle')}>
              <Switch
                checked={config.showVisibilityToggle}
                onChange={(e) => updateConfig('showVisibilityToggle', e.target.checked)}
              />
            </SettingRow>

            <SettingRow label={translate('showOpacitySlider')}>
              <Switch
                checked={config.showOpacitySlider}
                onChange={(e) => updateConfig('showOpacitySlider', e.target.checked)}
              />
            </SettingRow>
          </SettingSection>
        </Tab>

        <Tab id="sorting" title={translate('sortingOptions')}>
          <SettingSection>
            <SettingRow label={translate('allowReorder')}>
              <Switch
                checked={config.allowReorder}
                onChange={(e) => updateConfig('allowReorder', e.target.checked)}
              />
            </SettingRow>

            <SettingRow label={translate('sortOrder')}>
              <Select
                value={config.sortOrder}
                onChange={(e) => updateConfig('sortOrder', e.target.value)}
                style={{ width: '100%' }}
              >
                <option value="custom">{translate('sortCustom')}</option>
                <option value="alphabetical">{translate('sortAlphabetical')}</option>
                <option value="visibility">{translate('sortVisibility')}</option>
              </Select>
            </SettingRow>
          </SettingSection>
        </Tab>

        <Tab id="style" title={translate('layerStyle')}>
          <SettingSection>
            <SettingRow label={translate('layerItemPadding')}>
              <NumericInput
                value={config.layerItemPadding}
                onChange={(value) => updateConfig('layerItemPadding', value)}
                min={0}
                max={20}
                step={1}
                style={{ width: '100%' }}
              />
            </SettingRow>

            <SettingRow label={translate('layerItemHeight')}>
              <NumericInput
                value={config.layerItemHeight}
                onChange={(value) => updateConfig('layerItemHeight', value)}
                min={30}
                max={80}
                step={5}
                style={{ width: '100%' }}
              />
            </SettingRow>
          </SettingSection>

          <SettingSection title={translate('colorSettings')}>
            <SettingRow label={translate('activeLayerColor')}>
              <ThemeColorPicker
                specificTheme={props.theme2}
                value={config.activeLayerColor}
                onChange={(color) => updateConfig('activeLayerColor', color)}
              />
            </SettingRow>

            <SettingRow label={translate('hoverColor')}>
              <ThemeColorPicker
                specificTheme={props.theme2}
                value={config.hoverColor}
                onChange={(color) => updateConfig('hoverColor', color)}
              />
            </SettingRow>

            <SettingRow label={translate('borderColor')}>
              <ThemeColorPicker
                specificTheme={props.theme2}
                value={config.borderColor}
                onChange={(color) => updateConfig('borderColor', color)}
              />
            </SettingRow>
          </SettingSection>
        </Tab>

        <Tab id="advanced" title={translate('advancedOptions')}>
          <SettingSection>
            <SettingRow label={translate('enableLayerActions')}>
              <Switch
                checked={config.enableLayerActions}
                onChange={(e) => updateConfig('enableLayerActions', e.target.checked)}
              />
            </SettingRow>

            <SettingRow label={translate('showLayerInfo')}>
              <Switch
                checked={config.showLayerInfo}
                onChange={(e) => updateConfig('showLayerInfo', e.target.checked)}
              />
            </SettingRow>

            <SettingRow label={translate('collapsibleGroups')}>
              <Switch
                checked={config.collapsibleGroups}
                onChange={(e) => updateConfig('collapsibleGroups', e.target.checked)}
              />
            </SettingRow>

            <SettingRow label={translate('compactMode')}>
              <Switch
                checked={config.compactMode}
                onChange={(e) => updateConfig('compactMode', e.target.checked)}
              />
            </SettingRow>
          </SettingSection>
        </Tab>
      </Tabs>
    </div>
  )
}

export default Setting
