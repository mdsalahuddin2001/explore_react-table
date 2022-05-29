import React, { useMemo } from 'react';
import { useTable, useColumnOrder } from 'react-table';
import MOCK_DATA from '../data/MOCK_DATA.json';
import { COLUMNS } from './column';
import './table.css';
const ColumnOrder = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setColumnOrder,
  } = useTable({ columns, data }, useColumnOrder);

  const changeOrder = () => {
    setColumnOrder([
      'id',
      'first_name',
      'last_name',
      'phone',
      'country',
      'date_of_birth',
    ]);
  };
  return (
    <>
      <button onClick={changeOrder}>Change column order</button>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getFooterGroupProps()}>
              {headerGroup.headers.map((col) => (
                <th {...col.getHeaderProps()}>{col.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ColumnOrder;
