type ColorType = {
  primary: string;
  secondary: string;
  ghost: string;
  link: string;
  default: string;
  success: string;
  warning: string;
  danger: string;
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

type ComponentControlType = {
  bg: string;
  color: string;
  border: string;
};

type ControlType = Record<string, ComponentControlType>;

type BackgroundColor = Omit<ColorType, 'ghost' | 'link'>;
type BorderColorType = Omit<ColorType, 'ghost' | 'link'>;

export interface AppThemeType {
  colors: ColorType & { black: string; white: string };
  bgColors: BackgroundColor;
  bgButton: BackgroundColor;
  borderColor: BorderColorType;
  controls: ControlType;
  spaces: SizeType;
}
