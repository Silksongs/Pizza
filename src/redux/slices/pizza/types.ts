import { Sort } from "../filter/types";

export type FetchPizzasArgs = {
  order: string;
  sortBy: string;
  search: string;
  currentPage: number;
  categoryId: number;
};

export type SearchPizzaParams = {
  order: string;
  sortBy: Sort["sortProperty"];
  search: string;
  currentPage: string;
  categoryId: string;
};

export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}
