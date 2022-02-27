import React from "react";
import { Table as AntTable } from "antd";
import { columns } from "./table.config";
import { useBidsSelector } from "features/bids/bids.selectors";
import { Bid } from "types";
import { useBidsActions } from "features/bids/bids.actions";

export const Table = () => {
  const dataSource = useBidsSelector();
  const { selectBid } = useBidsActions();

  const handleRowClick = (record: Bid) => () => {
    selectBid(record);
  };

  return (
    <AntTable
      columns={columns}
      dataSource={dataSource}
      rowKey={(record) => `${record.bid}-id`}
      pagination={false}
      scroll={{ x: 330 }}
      onRow={(record) => ({
        onClick: handleRowClick(record),
      })}
    />
  );
};
