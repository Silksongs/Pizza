import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchPizzasArgs, Pizza } from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzasArgs>(
  "pizza/fetchPizzasStatus",
  async (params: FetchPizzasArgs) => {
    const { order, sortBy, search, currentPage, categoryId } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://630e91f337925634187f0c4f.mockapi.io/items?limit=4&page=${currentPage}&category=${categoryId}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);
