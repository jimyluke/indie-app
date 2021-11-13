import React from "react";
import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const DeleteAction = ({ onDelete }) => (
  <div className="flex admin-action">
    <Popconfirm
      title="Are you sure delete this item?"
      onConfirm={onDelete}
      okText="Yes"
      cancelText="No"
    >
      <Button type="link" style={{ color: "red" }} title="Delete">
        <DeleteOutlined />
      </Button>
    </Popconfirm>
  </div>
);

export default DeleteAction;
