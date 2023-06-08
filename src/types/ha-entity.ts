import { Context } from './ha-common';

export enum HassEntityCategory {
  CONFIG = 'config',
  DIAGNOSTIC = 'diagnostic',
}

export enum HassLightColorMode {
  UNKNOWN = 'unknown',
  ONOFF = 'onoff',
  BRIGHTNESS = 'brightness',
  COLOR_TEMP = 'color_temp',
  HS = 'hs',
  XY = 'xy',
  RGB = 'rgb',
  RGBW = 'rgbw',
  RGBWW = 'rgbww',
  WHITE = 'white',
}

export interface HassEntity {
  entity_id: string;
  name?: string;
  device_id?: string;
  display_precision?: number;
  area_id?: string;
  hidden?: boolean;
  entity_category?: HassEntityCategory;
  translation_key?: string;
  platform?: string;
}

export interface HassEntityState {
  entity_id: string;
  state: string;
  last_changed: string;
  last_updated: string;
  attributes: HassEntityStateAttributes;
  context: Context;
}

export interface HassEntityStateAttributes extends Record<string, any> {
  friendly_name?: string;
  unit_of_measurement?: string;
  icon?: string;
  entity_picture?: string;
  supported_features?: number;
  hidden?: boolean;
  assumed_state?: boolean;
  device_class?: string;
  state_class?: string;
  restored?: boolean;
}

export interface HassLightEntityStateAttributes extends HassEntityStateAttributes {
  min_color_temp_kelvin?: number;
  max_color_temp_kelvin?: number;
  min_mireds?: number;
  max_mireds?: number;
  brightness?: number;
  xy_color?: [number, number];
  hs_color?: [number, number];
  color_temp?: number;
  color_temp_kelvin?: number;
  rgb_color?: [number, number, number];
  rgbw_color?: [number, number, number, number];
  rgbww_color?: [number, number, number, number, number];
  effect?: string;
  effect_list?: string[] | null;
  supported_color_modes?: HassLightColorMode[];
  color_mode?: HassLightColorMode;
}

export interface HassDevice {
  id: string;
  config_entries: string[];
  connections: Array<[string, string]>;
  identifiers: Array<[string, string]>;
  manufacturer: string | null;
  model: string | null;
  name: string | null;
  sw_version: string | null;
  hw_version: string | null;
  via_device_id: string | null;
  area_id: string | null;
  name_by_user: string | null;
  entry_type: 'service' | null;
  disabled_by: 'user' | 'integration' | 'config_entry' | null;
  configuration_url: string | null;
}

export interface HassArea {
  area_id: string;
  name: string;
  picture: string | null;
  aliases: string[];
}

export interface HassService {
  name?: string;
  description: string;
  target?: {} | null;
  fields: {
    [field_name: string]: {
      name?: string;
      description: string;
      example: string | boolean | number;
      selector?: {};
    };
  };
}
