import classnames from "classnames";
import { useSelectedBidSelector } from "features/bids/bids.selectors";
import { Bid } from "types";
import "./table.scss";

export const BidCell = ({ record }: { record: Bid }) => {
  const { bid } = useSelectedBidSelector() ?? {};
  const isSelected = bid === record.bid;
  const classes = classnames({ table__cell__selected: isSelected });
  return <span className={classes}>{`Заявка #${record.bid}`}</span>;
};
