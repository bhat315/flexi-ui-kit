import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "../components/DataTable";

const meta: Meta<typeof DataTable<any>> = {
  title: "Components/DataTable",
  component: DataTable,
};
export default meta;

type Story = StoryObj<typeof DataTable<any>>;

const sampleData = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];

const columns = [
  { key: "name", title: "Name", dataIndex: "name" },
  { key: "age", title: "Age", dataIndex: "age" },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns,
    selectable: true,
  },
};
