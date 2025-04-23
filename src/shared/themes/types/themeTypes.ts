type ColorType = {
  primary: string;
  secondary: string;
  ghost: string;
  link: string;
  default: string;
  success: string;
  warning: string;
  error: string;
  disabled: string;
};

export type SizeType = {
  none: string;
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
};

export type BorderType = {
  success: string;
  warning: string;
  error: string;
};

type ControlItemType = {
  default: string;
  primary?: string;
  secondary?: string;
  ghost?: string;
  link?: string;
  hover?: string;
  active?: string;
  focus?: string;
  disabled?: string;
  success?: string;
  warning?: string;
  error?: string;
};

type ComponentControlType = {
  bg: ControlItemType;
  color?: ControlItemType;
  border?: ControlItemType;
};

type ControlType = Record<string, ComponentControlType>;

type BackgroundColor = Omit<ColorType, 'ghost' | 'link'>;

export interface AppThemeType {
  colors: ColorType & { black: string; white: string };
  bg: BackgroundColor;
  controls: ControlType;
  spaces: SizeType;
  borders: BorderType;
}
