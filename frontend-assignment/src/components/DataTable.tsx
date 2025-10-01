import React, { useState } from "react";

interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

function DataTable<T>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [selected, setSelected] = useState<T[]>([]);

  const toggleRow = (row: T) => {
    let updated: T[];
    if (selected.includes(row)) {
      updated = selected.filter((r) => r !== row);
    } else {
      updated = [...selected, row];
    }
    setSelected(updated);
    onRowSelect?.(updated);
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (!data.length) return <div className="p-4 text-gray-500">No data available</div>;

  return (
    <table className="min-w-full border border-gray-200 rounded-md overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          {selectable && <th className="p-2"></th>}
          {columns.map((col) => (
            <th
              key={col.key}
              className="text-left p-2 font-medium text-gray-700 border-b"
            >
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="hover:bg-gray-50">
            {selectable && (
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={selected.includes(row)}
                  onChange={() => toggleRow(row)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key} className="p-2 border-b">
                {String(row[col.dataIndex])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
