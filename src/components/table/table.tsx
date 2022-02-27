import { Table as AntTable } from "antd";
import { columns } from "./table.config";
import { useBidsSelector } from "features/bids/bids.selectors";

export const Table = () => {
  const dataSource = useBidsSelector();
  return (
    <AntTable columns={columns} dataSource={dataSource} rowKey={(record) => `${record.bid}-id`} pagination={false} />
  );
};
