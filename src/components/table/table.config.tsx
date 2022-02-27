import { ColumnsType } from "antd/lib/table";
import { TablePointPicker } from "components/table/table.point-picker";
import { Bid } from "types";

export const columns: ColumnsType<Bid> = [
  {
    title: "Заявка",
    dataIndex: "bid",
    key: "bid",
    render: (text) => <>Заявка #{text}</>,
  },
  {
    title: "Погрузка",
    dataIndex: "startPoint",
    key: "startPoint",
    render: (text, record) => {
      return <TablePointPicker bid={record.bid} name="startPoint" />;
    },
  },
  {
    title: "Разгрузка",
    dataIndex: "endPoint",
    key: "endPoint",
    render: (text, record) => {
      return <TablePointPicker bid={record.bid} name="endPoint" />;
    },
  },
];

export const dataSource: Bid[] = [
  {
    bid: 1,
    startPoint: 10,
    endPoint: 11,
  },
  {
    bid: 1,
    startPoint: 20,
    endPoint: 21,
  },
  {
    bid: 1,
    startPoint: 30,
    endPoint: 31,
  },
  {
    bid: 1,
    startPoint: 40,
    endPoint: 41,
  },
];
