import { useContext } from 'react';
import styled from 'styled-components';

import { SizeType } from '../../lib';
import { Select } from '../../ui/Select';
import { SupportedLocales } from '../config';
import { useTranslate } from '../hooks';
import { IntlContext } from '../IntlContext';

// TODO Поправить hover & focus
const StyledSelect = styled(Select)`
  select,
  ::picker(select) {
    background-color: ${({ theme }) => theme.controls.select.bg.primary};
    border: ${({ theme }) => theme.controls.select.border.primary};
    color: ${({ theme }) => theme.colors.white};

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      filter: brightness(110%);
      background-color: ${({ theme }) => theme.controls.select.bg.primary};
      color: ${({ theme }) => theme.colors.white};
      border: ${({ theme }) => theme.controls.select.border.primary};
    }
  }

  ::picker-icon {
    color: ${({ theme }) => theme.colors.white};
  }

  select > option {
    border: ${({ theme }) => theme.controls.select.border.primary};

    &:first-of-type {
      border-radius: 0;
      border-bottom: none;
    }

    &:last-of-type {
      border-radius: 0;
      border-top: none;
    }
  }
`;

export const LocalizationButton = () => {
  const translate = useTranslate();
  const { currentLocale, onChangeLocale } = useContext(IntlContext);

  const handleChange = (locale: string) => {
    switch (locale) {
      case SupportedLocales.EN:
        onChangeLocale(SupportedLocales.EN);
        break;
      default:
        onChangeLocale(SupportedLocales.RU);
    }
  };

  return (
    <StyledSelect
      options={[
        {
          label: translate('locale.en'),
          value: SupportedLocales.EN,
        },
        {
          label: translate('locale.ru'),
          value: SupportedLocales.RU,
        },
      ]}
      onChange={handleChange}
      value={currentLocale}
      size={SizeType.SMALL}
    />
  );
};
