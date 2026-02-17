import { type ImmutableObject } from 'jimu-core'

export interface LayerManagerConfig {
  // Apparence générale
  backgroundColor: string
  textColor: string
  fontSize: number
  
  // Options de légende
  showLegend: boolean
  legendPosition: 'inline' | 'below'
  legendSize: number
  
  // Options d'affichage
  showLayerCount: boolean
  enableSearch: boolean
  enableGrouping: boolean
  
  // Options de tri
  allowReorder: boolean
  sortOrder: 'custom' | 'alphabetical' | 'visibility'
  
  // Options de style des couches
  layerItemPadding: number
  layerItemHeight: number
  showVisibilityToggle: boolean
  showOpacitySlider: boolean
  
  // Couleurs personnalisées
  activeLayerColor: string
  hoverColor: string
  borderColor: string
  
  // Options avancées
  enableLayerActions: boolean
  showLayerInfo: boolean
  collapsibleGroups: boolean
  compactMode: boolean
}

export type IMLayerManagerConfig = ImmutableObject<LayerManagerConfig>

export const defaultConfig: IMLayerManagerConfig = {
  // Apparence générale
  backgroundColor: '#ffffff',
  textColor: '#333333',
  fontSize: 14,
  
  // Options de légende
  showLegend: true,
  legendPosition: 'below',
  legendSize: 16,
  
  // Options d'affichage
  showLayerCount: true,
  enableSearch: true,
  enableGrouping: true,
  
  // Options de tri
  allowReorder: true,
  sortOrder: 'custom',
  
  // Options de style des couches
  layerItemPadding: 8,
  layerItemHeight: 40,
  showVisibilityToggle: true,
  showOpacitySlider: false,
  
  // Couleurs personnalisées
  activeLayerColor: '#0079c1',
  hoverColor: '#f3f3f3',
  borderColor: '#d1d1d1',
  
  // Options avancées
  enableLayerActions: true,
  showLayerInfo: true,
  collapsibleGroups: true,
  compactMode: false
}
