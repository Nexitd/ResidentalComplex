import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";

export const getCards = createAsyncThunk("cards/getCards", async () => {
  const data = await axiosInstance.get("test");

  return data.data;
});

export const postFilterData = createAsyncThunk("cards/postFilterData", async (city, district) => {
    const data = await axiosInstance.get(`test/?city[]=${city}&district[]=${district}`);

    return data.data;
});

export const getCities = createAsyncThunk("cards/getCities", async (page) => {
    const data = await axiosInstance.get(`url/?perPage=8&page=${page}`);

    return data.data
});

export const getDistricts = createAsyncThunk("cards/getCities", async () => {
    const data = await axiosInstance.get("url");

    return data.data
});

export const cardsReducer = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    cities: [],
    districts: []
  },

  reducers: {},

  extraReducers: {
    [getCards.fulfilled]: (state, action) => {
      state.cards = action.payload.data;
    },

    [postFilterData.fulfilled]: (state, action) => {
        state.cards = action.payload.data;
    },

    [getCities.fulfilled]: (state, action) => {
        state.cities = action.payload.data;
    },

    [getDistricts.fulfilled]: (state, action) => {
        state.districts = action.payload.data;
    }
  },
});

export default cardsReducer.reducer;
