'use client';

import { FieldErrors, UseFormClearErrors, UseFormRegister, UseFormSetFocus, UseFormWatch } from 'react-hook-form';
import { SearchForm, SearchFormField } from '@/types/Forms';
import classNames from 'classnames';
import { useEffect } from 'react';

type Props = {
  watch: UseFormWatch<SearchForm>;
  register: UseFormRegister<SearchForm>;
  errors?: FieldErrors<SearchForm>;
  radioName: string;
  labelRadio: string;
  placeholder: string;
  filterName: SearchFormField;
  clearErrors: UseFormClearErrors<SearchForm>;
  setFocus: UseFormSetFocus<SearchForm>;
};

const Filter:React.FC<Props> = ({
  watch,
  register,
  errors,
  radioName,
  labelRadio,
  placeholder,
  filterName,
  clearErrors,
  setFocus,
}) => {
  const clickRadioHandler = () => {
    clearErrors();
    setFocus(filterName);
  };

  const currentRadioSelected = watch('filterRadio') === radioName;

  useEffect(() => {
    if (currentRadioSelected) {
      setFocus(filterName);
    }
  }, [filterName, setFocus, currentRadioSelected]);

  return (
    <div className="flex flex-col mb-6 gap-3">
      <div className="flex gap-2 items-center relative">
        <input
          id={radioName}
          type="radio"
          value={radioName}
          className={`radio_input ${
            currentRadioSelected ? 'border-salmon': 'border-white'
          }`}
          {...register('filterRadio', { required: 'No filter selected' })}
          onClick={clickRadioHandler}
        />
        <span className={
          classNames(
            'absolute w-3 h-3 rounded-full bg-salmon ml-1',
            {hidden: watch('filterRadio') !== radioName},
          )} />
        <label htmlFor={radioName} className={`radio_label ${
          currentRadioSelected ? 'text-salmon': 'text-white'
        }`}>
          {labelRadio}
        </label>
      </div>

      <input
        className="text_input"
        placeholder={placeholder}
        {...register(filterName, {
          required: `The "${labelRadio}" field is empty`,
          disabled: !currentRadioSelected,
        })}
        aria-invalid={errors && errors[filterName] ? true : false}
        aria-labelledby={radioName}
      />
      {errors && errors[filterName] && (
        <div>
          <p className="text_error">{errors[filterName]?.message}</p>
        </div>
      )}
    </div>
  );
};

export default Filter;
