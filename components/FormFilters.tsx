'use client';

import { SearchForm, SearchFormField } from '@/types/Forms';
import classNames from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import Filter from './Filter';

const FormFilters = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    clearErrors,
    setFocus,
  } = useForm<SearchForm>({
    defaultValues: {
      filterRadio: 'radio-title',
    },
  });

  const onSubmit: SubmitHandler<SearchForm> = (data) => {
    alert(JSON.stringify(data));
  };

  const onReset = () => {
    reset();
    clearErrors();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* <div className="flex flex-col mb-6 gap-3">
        <div className="flex gap-2 items-center relative">
          <input
            id="radio-title"
            type="radio"
            value="radio-title"
            className={`radio_input ${
              watch('filterRadio') === 'radio-title' ? 'border-salmon': 'border-white'
            }`}
            {...register('filterRadio', { required: 'No filter selected' })}
          />
          <span className={
            classNames(
              'absolute w-3 h-3 rounded-full bg-salmon ml-1',
              {hidden: watch('filterRadio') !== 'radio-title'},
            )} />
          <label htmlFor="radio-title" className={`radio_label ${
            watch('filterRadio') === 'radio-title' ? 'text-salmon': 'text-white'
          }`}>
            Title
          </label>
        </div>

        <input
          className="text_input"
          placeholder="Title"
          {...register('title', {
            required: 'The "Title" field is empty',
          })}
          aria-invalid={errors.title ? true : false}
        />
      </div> */}

      <Filter
        watch={watch}
        register={register}
        errors={errors}
        radioName="radio-title"
        labelRadio="Title"
        placeholder="Title"
        filterName={SearchFormField.Title}
        clearErrors={clearErrors}
        setFocus={setFocus}
      />

      <Filter
        watch={watch}
        register={register}
        errors={errors}
        radioName="radio-alcoholic"
        labelRadio="Alcoholic"
        placeholder="Select alcoholic type"
        filterName={SearchFormField.Alcoholic}
        clearErrors={clearErrors}
        setFocus={setFocus}
      />

      <div className="flex justify-between gap-3">
        <input type="reset" className="btn_border px-3 flex-grow bg-salmon" value="Clear"  onClick={onReset}/>
        <input type="submit" className="btn_border px-3 flex-grow" value="Find" />
      </div>

    </form>
  );
};

export default FormFilters;
