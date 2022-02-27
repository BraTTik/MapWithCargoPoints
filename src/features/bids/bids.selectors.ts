import { shallowEqual } from "react-redux";
import { useAppSelector } from "app/hooks";

export const useBidsSelector = () => useAppSelector((state) => state.bids.bids, shallowEqual);

export const useSelectedPoint = (bid: number, name: "startPoint" | "endPoint") => {
  const bids = useAppSelector((state) => state.bids.bids, shallowEqual);

  const item = bids.find((i) => i.bid === bid);

  if (item) {
    return item[name];
  }
};

export const useSelectedBidSelector = () => useAppSelector((state) => state.bids.selectedBid);
