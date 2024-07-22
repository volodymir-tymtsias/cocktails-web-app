'use client';

import { UseFormClearErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { SearchForm, SearchFormField } from '@/types/Forms';
import classNames from 'classnames';

type Props = {
  watch: UseFormWatch<SearchForm>;
  register: UseFormRegister<SearchForm>;
  radioName: string;
  labelRadio: string;
  labelId: string;
  radioGroupName: SearchFormField;
  clearErrors: UseFormClearErrors<SearchForm>;
};

const RadioInput:React.FC<Props> = ({
  watch,
  register,
  radioName,
  labelRadio,
  labelId,
  radioGroupName,
  clearErrors,
}) => {
  const clickRadioHandler = () => {
    clearErrors();
  };

  const currentRadioSelected = watch(radioGroupName) === radioName;

  return (
    <div className="flex gap-2 items-center relative">
      <input
        id={radioName}
        type="radio"
        value={radioName}
        className={`radio_input ${
          currentRadioSelected ? 'border-salmon': 'border-white'
        }`}
        {...register(radioGroupName, { required: 'No filter selected' })}
        onClick={clickRadioHandler}
      />
      <span className={
        classNames(
          'absolute w-3 h-3 rounded-full bg-salmon ml-1',
          {hidden: watch(radioGroupName) !== radioName},
        )} />
      <label htmlFor={radioName} id={labelId} className={`radio_label ${
        currentRadioSelected ? 'text-salmon': 'text-white'
      }`}>
        {labelRadio}
      </label>
    </div>
  );
};

export default RadioInput;
