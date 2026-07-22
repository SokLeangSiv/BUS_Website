import React from "react";
import { ExpenseItem } from "@/lib/trip-data";
import { DollarSign, Receipt, Sparkles } from "lucide-react";

interface ExpenseTableProps {
  title?: string;
  expenses: ExpenseItem[];
  totalExpense: number;
}

export const ExpenseTable: React.FC<ExpenseTableProps> = ({
  title = "Itemized Trip Expenses",
  expenses,
  totalExpense,
}) => {
  return (
    <div className="rounded-3xl glass-card border border-pink-200 p-6 shadow-md shadow-pink-100/50 space-y-4 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-pink-100 text-pink-600">
            <Receipt className="w-5 h-5" />
          </div>
          <h4 className="font-heading font-bold text-lg text-slate-900">
            {title}
          </h4>
        </div>
        <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-800 rounded-full border border-amber-200 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" /> USD ($) Budget
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-pink-200 bg-pink-50/70 text-pink-900 font-bold">
              <th className="py-3 px-4 rounded-l-xl">Expense Category</th>
              <th className="py-3 px-4 text-right rounded-r-xl">Amount (USD)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-pink-100">
            {expenses.map((item, index) => (
              <tr key={index} className="hover:bg-pink-50/40 transition-colors">
                <td className="py-2.5 px-4 font-medium text-slate-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  {item.category}
                </td>
                <td className="py-2.5 px-4 text-right font-bold text-slate-900 font-mono">
                  ${item.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-pink-300 bg-gradient-to-r from-pink-100 to-rose-100 font-extrabold text-pink-950">
              <td className="py-3.5 px-4 text-sm font-heading rounded-l-xl flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-pink-600" /> Total Trip Expenditure
              </td>
              <td className="py-3.5 px-4 text-right text-base text-pink-700 font-mono font-extrabold rounded-r-xl">
                ${totalExpense.toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
