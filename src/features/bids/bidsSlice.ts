import { Bid } from "types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type BidState = {
  bids: Bid[];
  selectedBid: number | null;
};

const initialState: BidState = {
  bids: [
    {
      bid: 1,
      startPoint: 10,
      endPoint: 11,
    },
    {
      bid: 2,
      startPoint: 20,
      endPoint: 21,
    },
    {
      bid: 3,
      startPoint: 30,
      endPoint: 31,
    },
    {
      bid: 4,
      startPoint: 40,
      endPoint: 41,
    },
  ],
  selectedBid: null,
};

export const bidSlice = createSlice({
  name: "bids",
  initialState,
  reducers: {
    selectPoint: (state, action: PayloadAction<{ bid: number; startPoint?: number; endPoint?: number }>) => {
      const { bid, ...points } = action.payload;
      const foundIndex = state.bids.findIndex((item) => item.bid === bid);
      if (foundIndex < 0) return state;

      state.bids[foundIndex] = { ...state.bids[foundIndex], ...points };
    },

    selectBid: (state, action: PayloadAction<number>) => {
      state.selectedBid = action.payload;
    },

    resetBid: (state) => {
      state.selectedBid = null;
    },
  },
});
