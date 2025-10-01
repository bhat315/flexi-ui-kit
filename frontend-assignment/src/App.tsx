import React, { useState } from "react";
import InputField from "./components/InputField";
import DataTable from "./components/DataTable";

export default function App() {
  const [name, setName] = useState("");

  const sampleData = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
  ];

  const columns = [
    { key: "name", title: "Name", dataIndex: "name" },
    { key: "age", title: "Age", dataIndex: "age" },
  ];

  return (
    <div className="p-6 flex flex-col gap-8">
      <h1 className="text-2xl font-bold">React Assignment Demo</h1>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Input Field</h2>
        <InputField
          label="Your Name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          helperText="This is a helper text"
        />
        <InputField
          label="Invalid Example"
          placeholder="Enter text"
          invalid
          errorMessage="This field is required"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Data Table</h2>
        <DataTable data={sampleData} columns={columns} selectable />
      </div>
    </div>
  );
}
