import styled from 'styled-components';

import {
  Button,
  Checkbox,
  ColorType,
  profession,
  RadioGroup,
  Select,
  TextField,
  Title,
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
  return (
    <div>
      <Title as="h3">User Settings</Title>
      <StyledForm>
        <TextField name="surname" label="Фамилия" required />
        <TextField name="name" label="Имя" required />
        <TextField name="patronymic" label="Отчество" />
        <TextField name="email" label="Email" required />
        <TextField name="age" label="Возраст" required />
        <RadioGroup
          options={[
            { label: 'Мужской', value: 'male' },
            { label: 'Женский', value: 'female' },
          ]}
          label="Пол"
          required
        />
        <Select label="Профессия" options={profession} required />
        <TextField
          name="age"
          as="textarea"
          label="О себе"
          placeholder="Краткий рассказ о себе"
        />
        <Checkbox
          name="check"
          label="Я согласен на обработку персональных данных"
        />
        <StyledWrapperBtn>
          <Button type="submit" view={ColorType.PRIMARY} label="Сохранить" />
          <Button type="reset" view={ColorType.SECONDARY} label="Сбросить" />
        </StyledWrapperBtn>
      </StyledForm>
    </div>
  );
};
