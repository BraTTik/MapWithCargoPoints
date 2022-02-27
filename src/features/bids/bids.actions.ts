import { useMemo } from "react";
import { useAppDispatch } from "app/hooks";
import { bidSlice } from "./bidsSlice";
import { SelectPointPayload } from "features/bids/bids.types";

export const useBidsActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(
    () => ({
      selectPoint: (payload: SelectPointPayload) => dispatch(bidSlice.actions.selectPoint(payload)),
    }),
    [dispatch],
  );
};
