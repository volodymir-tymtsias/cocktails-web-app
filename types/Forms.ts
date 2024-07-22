export interface SearchForm {
  title: string;
  alcoholic: string;
  category: string;
  glass: string;
  ingredient: string;
  letter: string;
  filterRadio: string;
}

export enum SearchFormField {
  Title = 'title',
  Alcoholic = 'alcoholic',
  Category = 'category',
  Glass = 'glass',
  Ingredient = 'ingredient',
  FirstLetter = 'letter',
  FilterRadio = 'filterRadio',
}
