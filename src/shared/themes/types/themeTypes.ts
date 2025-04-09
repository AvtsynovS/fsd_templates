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

type BackgroundColor = Omit<ColorType, 'ghost' | 'link'>;
type BorderColorType = Omit<ColorType, 'ghost' | 'link'>;

export interface AppThemeType {
  colors: ColorType & { black: string; white: string };
  bgColors: BackgroundColor;
  bgButton: BackgroundColor;
  borderColor: BorderColorType;
}
