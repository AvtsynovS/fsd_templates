import 'styled-components';

import { AppThemeType } from './shared/themes/types';

declare module 'styled-components' {
  export type DefaultTheme = AppThemeType;
}
