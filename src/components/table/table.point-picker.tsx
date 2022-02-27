import { Select } from "antd";
import { ReactText, useCallback } from "react";
import { useBidsActions } from "features/bids/bids.actions";
import { useSelectedPoint } from "features/bids/bids.selectors";

type Option = {
  label: React.ReactNode;
  value?: string | number | null;
};

const options: Option[] = [
  {
    value: 10,
    label: "Point 1",
  },
  {
    value: 11,
    label: "Point 2",
  },
  {
    value: 20,
    label: "Point 3",
  },
  {
    value: 21,
    label: "Point 4",
  },
  {
    value: 30,
    label: "Point 5",
  },
  {
    value: 31,
    label: "Point 6",
  },
  {
    value: 40,
    label: "Point 7",
  },
  {
    value: 41,
    label: "Point 8",
  },
];

export const TablePointPicker = ({ bid, name }: { bid: number; name: "startPoint" | "endPoint" }) => {
  const { selectPoint } = useBidsActions();
  const value = useSelectedPoint(bid, name);
  const handleChange = useCallback(
    (value: ReactText) => {
      selectPoint({ bid, [name]: value });
    },
    [bid, name],
  );
  return <Select value={value} onChange={handleChange} options={options} />;
};
