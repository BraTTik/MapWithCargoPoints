import { useMemo } from "react";
import { useAppDispatch } from "app/hooks";
import { bidSlice } from "./bidsSlice";
import { SelectPointPayload } from "features/bids/bids.types";
import { Bid } from "types";

export const useBidsActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(
    () => ({
      selectPoint: (payload: SelectPointPayload) => dispatch(bidSlice.actions.selectPoint(payload)),
      selectBid: (payload: Bid) => dispatch(bidSlice.actions.selectBid(payload)),
      resetBid: () => dispatch(bidSlice.actions.resetBid()),
    }),
    [dispatch],
  );
};
