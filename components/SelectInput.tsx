'use client';

import { useEffect, useRef, useState } from 'react';
import { SearchForm, SearchFormField } from '@/types/Forms';
import { Control, Controller, FieldErrors, UseFormClearErrors, UseFormSetValue } from 'react-hook-form';
import DirectionIcon from '../public/images/icons/direction.svg';
import CheckIcon from '../public/images/icons/check.svg';
import { getStringWithoutSpaces } from '@/helpers/getStringWithoutSpaces';
import classNames from 'classnames';
import { useOutsideClick } from '@/app/hooks';

type Props = {
  control: Control<SearchForm, any>;
  errors: FieldErrors<SearchForm>;
  isFocused: boolean;
  isDisabled: boolean;
  label: string;
  labelId: string;
  placeholder: string;
  inputName: SearchFormField;
  setValue: UseFormSetValue<SearchForm>;
  clearErrors: UseFormClearErrors<SearchForm>;
  options: string[];
};

const SelectInput: React.FC<Props> = ({
  control,
  errors,
  isFocused,
  isDisabled,
  label,
  labelId,
  placeholder,
  inputName,
  setValue,
  clearErrors,
  options,
}) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const dropdownRef: React.RefObject<HTMLDivElement> = useRef(null);
  const selectRef: React.RefObject<HTMLButtonElement> = useRef(null);

  const openDropdownHandler = () => {
    setIsDropdown((prev) => !prev);
  };

  const clickHandler = (selectedValue: string) => () => {
    setIsDropdown(false);
    setValue(inputName, selectedValue);
    clearErrors(inputName);
  };

  useOutsideClick(dropdownRef, () => {
    if (isDropdown) {
      setIsDropdown(false);
    }
  });

  useEffect(() => {
    if (isFocused) {
      selectRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <Controller
          control={control}
          name={inputName}
          rules={{ required: `The "${label}" is not selected` }}
          disabled={isDisabled}
          render={({ field: { value, name } }) => (
            <>
              <select
                name={name}
                className="hidden"
                value={value}
                disabled={isDisabled}
              >
                {options.map((item) => (
                  <option key={getStringWithoutSpaces(item)} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <button
                type="button"
                className="text_input relative w-full cursor-pointer appearance-none text-left"
                aria-haspopup="listbox"
                aria-expanded={isDropdown}
                aria-labelledby={labelId}
                onClick={openDropdownHandler}
                disabled={isDisabled}
                ref={selectRef}
              >
                <span
                  className={classNames(
                    'block truncate pr-4 font-extralight',
                    { 'text-slate-500': !value && !isDisabled },
                    { 'text-gray-200': !value && isDisabled },
                  )}
                >
                  {value || placeholder}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <DirectionIcon
                    className={classNames('icons', { 'text-slate-500': !isDisabled }, { 'text-gray-200': isDisabled })}
                    aria-hidden="true"
                  />
                </span>
              </button>

              {isDropdown && (
                <ul
                  className="dropdown_input"
                  tabIndex={-1}
                  role="listbox"
                  aria-labelledby={labelId}
                  aria-activedescendant={value ? `${inputName}-option-${getStringWithoutSpaces(value)}` : ''}
                >
                  {options.map((item) => {
                    const id = `${inputName}-option-${getStringWithoutSpaces(item)}`;

                    return (
                      <li
                        className={classNames('dropdown_item', { 'bg-salmon': value === item })}
                        id={id}
                        aria-selected={value === item}
                        role="option"
                        key={id}
                        onClick={clickHandler(item)}
                      >
                        <span className={classNames('block truncate', { 'text-white': value === item })}>
                          {item}
                        </span>

                        {value === item && (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-white">
                            <CheckIcon className="icons text-inherit" aria-hidden="true" />
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </>
          )}
        />
      </div>

      {errors && errors[inputName] && (
        <div>
          <p className="text_error">{errors[inputName]?.message}</p>
        </div>
      )}
    </>
  );
};

export default SelectInput;
