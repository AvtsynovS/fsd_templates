import { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  Button,
  Checkbox,
  ColorType,
  OptionType,
  professionList,
  RadioGroup,
  Select,
  TextField,
  Title,
  useTranslate,
  WeightType,
} from '@shared';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.m};
  max-width: 35%;
`;

const StyledWrapperBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spaces.l};

  & button {
    font-weight: ${WeightType.MEDIUM};
  }
`;

export const UserSettings = () => {
  const translate = useTranslate();
  const [professions, setProfessions] = useState<OptionType[]>([]);

  useEffect(() => {
    if (professionList) {
      const professions = professionList.map(({ value }) => ({
        label: translate(`field.option.${value}`),
        value,
      }));

      setProfessions(professions);
    }
  }, []);

  return (
    <div>
      <Title as="h3">{translate('page.user.title')}</Title>
      <StyledForm>
        <TextField
          name="surname"
          label={translate('field.label.surname')}
          placeholder={translate('field.placeholder.surname')}
          required
        />
        <TextField
          name="name"
          label={translate('field.label.name')}
          placeholder={translate('field.placeholder.name')}
          required
        />
        <TextField
          name="patronymic"
          label={translate('field.label.patronymic')}
          placeholder={translate('field.placeholder.patronymic')}
        />
        <TextField
          name="email"
          label={translate('field.label.email')}
          placeholder={translate('field.placeholder.email')}
          required
        />
        <TextField
          name="age"
          label={translate('field.label.age')}
          placeholder={translate('field.placeholder.age')}
          required
        />
        <RadioGroup
          label={translate('field.label.sex')}
          options={[
            { label: translate('field.option.male'), value: 'male' },
            { label: translate('field.option.female'), value: 'female' },
          ]}
          required
        />
        <Select
          label={translate('field.label.profession')}
          // TODO Подумать как перевести список профессий через useTranslate
          options={professions}
          required
        />
        <TextField
          name="about"
          as="textarea"
          label={translate('field.label.about')}
          placeholder={translate('field.placeholder.about')}
        />
        <Checkbox
          name="privacyPolicy"
          label={translate('field.label.privacyPolicy')}
        />
        <StyledWrapperBtn>
          <Button
            type="submit"
            view={ColorType.PRIMARY}
            label={translate('button.label.save')}
          />
          <Button
            type="reset"
            view={ColorType.SECONDARY}
            label={translate('button.label.clear')}
          />
        </StyledWrapperBtn>
      </StyledForm>
    </div>
  );
};
