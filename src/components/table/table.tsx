import React from "react";
import { Table as AntTable } from "antd";
import { columns } from "./table.config";
import { useBidsSelector } from "features/bids/bids.selectors";
import { useBidsActions } from "features/bids/bids.actions";

export const Table = () => {
  const dataSource = useBidsSelector();
  const { selectBid } = useBidsActions();

  const handleRowClick = (bid: number) => () => {
    selectBid(bid);
  };

  return (
    <AntTable
      columns={columns}
      dataSource={dataSource}
      rowKey={(record) => `${record.bid}-id`}
      pagination={false}
      scroll={{ x: 330 }}
      onRow={(record) => ({
        onClick: handleRowClick(record.bid),
      })}
    />
  );
};
