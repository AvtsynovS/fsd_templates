import { BorderType } from '../types/themeTypes';
import './colors.css';

// TODO возможно стоит добавить color и bg для ошибок в таком же формате
// TODO возможно добавить default type
export const borders: BorderType = {
  success: `1px solid var(--status-success-1)`,
  warning: `1px solid var(--status-warning-1)`,
  error: `1px solid var(--status-error-1)`,
};
