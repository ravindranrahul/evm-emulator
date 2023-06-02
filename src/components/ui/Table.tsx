import React from "react";
type Row = {
  offset: number;
  value: string;
};

const headings = ["Offset", "Value"];
export const Table = ({ rows }: { rows: Row[] }) => {
  return (
    <div>
      <div className="overflow-x-auto flex -mx-4 sm:-mx-6 md:mx-0">
        <div className="flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto max-h-96 lg:max-h-96">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                {headings.map((heading: string,i) => (
                  <th key={i} className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
                    <div className="py-2 pl-2 border-b border-slate-200 dark:border-slate-400/20">
                      {heading}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="align-baseline">
              {rows.map((row) => (
                  <tr key={row.offset}>
                    <td
                      className="w-1/6 border-b border-slate-200 font-mono text-slate-500"
                    >
                    <span className="pl-4">
                      {row.offset}
                      </span>
                    </td>
                    <td
                      className="border-b border-slate-200 font-mono leading-6 text-indigo-600 whitespace-pre"
                    >
                      {row.value}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
