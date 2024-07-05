export interface SearchForm {
  title: string;
  alcoholic: string;
  category: string;
  glasses: string;
  ingredient: string;
  filterRadio: string;
}

export enum SearchFormField {
  Title = 'title',
  Alcoholic = 'alcoholic',
  Category = 'category',
  Glasses = 'glasses',
  Ingredient = 'ingredient',
  FilterRadio = 'filterRadio',
}
