'use client';

import { SearchForm, SearchFormField } from '@/types/Forms';
import { SubmitHandler, useForm } from 'react-hook-form';
import RadioInput from './RadioInput';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import Spinner from '../public/images/icons/sync.svg';
import category from '../app/api/category_list.json';
import alcoholic from '../app/api/alcoholic_list.json';
import glass from '../app/api/glass_list.json';
import ingredient from '../app/api/ingredient_list.json';

const getLabel = (name: string) => {
  return name.slice(0, 1).toUpperCase() + name.slice(1);
};

const getOptions = (name: string) => {
  switch (name) {
  case SearchFormField.Alcoholic:
    return alcoholic.drinks.map((item) => item.strAlcoholic);

  case SearchFormField.Category:
    return category.drinks.map((item) => item.strCategory);

  case SearchFormField.Glass:
    return glass.drinks.map((item) => item.strGlass);

  case SearchFormField.Ingredient:
    return ingredient.drinks.map((item) => item.strIngredient1);

  case SearchFormField.FirstLetter:
    return [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'I', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y', 'Z',
    ];

  default:
    return [];
  }
};

const FormFilters = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    clearErrors,
    setFocus,
    control,
    setValue,
  } = useForm<SearchForm>({
    defaultValues: {
      filterRadio: `radio-${SearchFormField.Title}`,
    },
  });

  const onSubmit: SubmitHandler<SearchForm> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert(JSON.stringify(data));
  };

  const onReset = () => {
    reset();
    clearErrors();
  };

  const getIsFocused = (radioName: string) => watch('filterRadio') === radioName;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-6 flex flex-col gap-2">
        <RadioInput
          watch={watch}
          register={register}
          radioName={`radio-${SearchFormField.Title}`}
          labelRadio={getLabel(SearchFormField.Title)}
          labelId={`label-${SearchFormField.Title}`}
          radioGroupName={SearchFormField.FilterRadio}
          clearErrors={clearErrors}
        />

        <TextInput
          register={register}
          errors={errors}
          isFocused={getIsFocused(`radio-${SearchFormField.Title}`)}
          isDisabled={!getIsFocused(`radio-${SearchFormField.Title}`)}
          label={getLabel(SearchFormField.Title)}
          labelId={`label-${SearchFormField.Title}`}
          placeholder={`Enter a ${getLabel(SearchFormField.Title)}`}
          inputName={SearchFormField.Title}
          setFocus={setFocus}
        />
      </div>

      <div className="mb-6 flex flex-col gap-2">
        <RadioInput
          watch={watch}
          register={register}
          radioName={`radio-${SearchFormField.Alcoholic}`}
          labelRadio={getLabel(SearchFormField.Alcoholic)}
          labelId={`label-${SearchFormField.Alcoholic}`}
          radioGroupName={SearchFormField.FilterRadio}
          clearErrors={clearErrors}
        />

        <SelectInput
          control={control}
          errors={errors}
          isFocused={getIsFocused(`radio-${SearchFormField.Alcoholic}`)}
          isDisabled={!getIsFocused(`radio-${SearchFormField.Alcoholic}`)}
          label={getLabel(SearchFormField.Alcoholic)}
          labelId={`label-${SearchFormField.Alcoholic}`}
          placeholder={`Select ${SearchFormField.Alcoholic}`}
          inputName={SearchFormField.Alcoholic}
          setValue={setValue}
          clearErrors={clearErrors}
          options={getOptions(SearchFormField.Alcoholic)}
        />
      </div>

      <div className="mb-6 flex flex-col gap-2">
        <RadioInput
          watch={watch}
          register={register}
          radioName={`radio-${SearchFormField.Category}`}
          labelRadio={getLabel(SearchFormField.Category)}
          labelId={`label-${SearchFormField.Category}`}
          radioGroupName={SearchFormField.FilterRadio}
          clearErrors={clearErrors}
        />

        <SelectInput
          control={control}
          errors={errors}
          isFocused={getIsFocused(`radio-${SearchFormField.Category}`)}
          isDisabled={!getIsFocused(`radio-${SearchFormField.Category}`)}
          label={getLabel(SearchFormField.Category)}
          labelId={`label-${SearchFormField.Category}`}
          placeholder={`Select ${SearchFormField.Category}`}
          inputName={SearchFormField.Category}
          setValue={setValue}
          clearErrors={clearErrors}
          options={getOptions(SearchFormField.Category)}
        />
      </div>

      <div className="mb-6 flex flex-col gap-2">
        <RadioInput
          watch={watch}
          register={register}
          radioName={`radio-${SearchFormField.Glass}`}
          labelRadio={getLabel(SearchFormField.Glass)}
          labelId={`label-${SearchFormField.Glass}`}
          radioGroupName={SearchFormField.FilterRadio}
          clearErrors={clearErrors}
        />

        <SelectInput
          control={control}
          errors={errors}
          isFocused={getIsFocused(`radio-${SearchFormField.Glass}`)}
          isDisabled={!getIsFocused(`radio-${SearchFormField.Glass}`)}
          label={getLabel(SearchFormField.Glass)}
          labelId={`label-${SearchFormField.Glass}`}
          placeholder={`Select ${SearchFormField.Glass} type`}
          inputName={SearchFormField.Glass}
          setValue={setValue}
          clearErrors={clearErrors}
          options={getOptions(SearchFormField.Glass)}
        />
      </div>

      <div className="mb-6 flex flex-col gap-2">
        <RadioInput
          watch={watch}
          register={register}
          radioName={`radio-${SearchFormField.Ingredient}`}
          labelRadio={getLabel(SearchFormField.Ingredient)}
          labelId={`label-${SearchFormField.Ingredient}`}
          radioGroupName={SearchFormField.FilterRadio}
          clearErrors={clearErrors}
        />

        <SelectInput
          control={control}
          errors={errors}
          isFocused={getIsFocused(`radio-${SearchFormField.Ingredient}`)}
          isDisabled={!getIsFocused(`radio-${SearchFormField.Ingredient}`)}
          label={getLabel(SearchFormField.Ingredient)}
          labelId={`label-${SearchFormField.Ingredient}`}
          placeholder={`Select ${SearchFormField.Ingredient}`}
          inputName={SearchFormField.Ingredient}
          setValue={setValue}
          clearErrors={clearErrors}
          options={getOptions(SearchFormField.Ingredient)}
        />
      </div>

      <div className="mb-6 flex flex-col gap-2">
        <RadioInput
          watch={watch}
          register={register}
          radioName={`radio-${SearchFormField.FirstLetter}`}
          labelRadio={getLabel(SearchFormField.FirstLetter)}
          labelId={`label-${SearchFormField.FirstLetter}`}
          radioGroupName={SearchFormField.FilterRadio}
          clearErrors={clearErrors}
        />

        <SelectInput
          control={control}
          errors={errors}
          isFocused={getIsFocused(`radio-${SearchFormField.FirstLetter}`)}
          isDisabled={!getIsFocused(`radio-${SearchFormField.FirstLetter}`)}
          label={getLabel(SearchFormField.FirstLetter)}
          labelId={`label-${SearchFormField.FirstLetter}`}
          placeholder={`Select ${SearchFormField.FirstLetter}`}
          inputName={SearchFormField.FirstLetter}
          setValue={setValue}
          clearErrors={clearErrors}
          options={getOptions(SearchFormField.FirstLetter)}
        />
      </div>

      <div className="flex justify-between gap-3">
        <button type="reset" className="btn_border w-1/2 bg-salmon px-3" onClick={onReset}>
          Clear
        </button>
        <button type="submit" className="btn_border w-1/2 px-3" disabled={isSubmitting}>
          {isSubmitting ? <Spinner className="icons animate-spin" /> : 'Find'}
        </button>
      </div>
    </form>
  );
};

export default FormFilters;
