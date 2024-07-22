'use client';

import { FieldErrors, UseFormRegister, UseFormSetFocus, UseFormWatch } from 'react-hook-form';
import { SearchForm, SearchFormField } from '@/types/Forms';
import { useEffect } from 'react';

type Props = {
  register: UseFormRegister<SearchForm>;
  errors?: FieldErrors<SearchForm>;
  isFocused: boolean;
  isDisabled: boolean;
  label: string;
  labelId: string;
  placeholder: string;
  inputName: SearchFormField;
  setFocus: UseFormSetFocus<SearchForm>;
};

const TextInput:React.FC<Props> = ({
  register,
  errors,
  isFocused,
  isDisabled,
  label,
  labelId,
  placeholder,
  inputName,
  setFocus,
}) => {
  useEffect(() => {
    if (isFocused) {
      setFocus(inputName);
    }
  }, [inputName, setFocus, isFocused]);

  return (
    <>
      <input
        className="text_input"
        placeholder={placeholder}
        {...register(inputName, {
          required: `The "${label}" field is empty`,
          disabled: isDisabled,
        })}
        aria-invalid={errors && errors[inputName] ? true : false}
        aria-labelledby={labelId}
      />
      {errors && errors[inputName] && (
        <div>
          <p className="text_error">{errors[inputName]?.message}</p>
        </div>
      )}
    </>
  );
};

export default TextInput;
