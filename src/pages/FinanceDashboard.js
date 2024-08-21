import React, { useState } from 'react';
import { PlusIcon, DollarSignIcon, CreditCardIcon, PiggyBankIcon, ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

const FinanceDashboard = () => {
  const [balance] = useState(5280.50);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const transactions = [
    { name: 'Grocery Store', amount: -78.50, icon: <CreditCardIcon className="h-4 w-4" /> },
    { name: 'Salary Deposit', amount: 2500, icon: <DollarSignIcon className="h-4 w-4" /> },
    { name: 'Savings Transfer', amount: -500, icon: <PiggyBankIcon className="h-4 w-4" /> },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-900 p-4 space-y-4 overflow-y-auto">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Finance Dashboard</h1>
        <button className="bg-gray-200 p-2 rounded-full">
          <PlusIcon className="h-6 w-6" />
        </button>
      </header>

      <div className="bg-blue-600 text-white p-4 rounded-md">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-medium">Total Balance</h2>
          <DollarSignIcon className="h-5 w-5" />
        </div>
        <div className="text-2xl font-bold">{formatCurrency(balance)}</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-md">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-medium">Income</h2>
            <ArrowUpIcon className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-xl font-bold">{formatCurrency(3200)}</div>
        </div>
        <div className="bg-white p-4 rounded-md">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-medium">Expenses</h2>
            <ArrowDownIcon className="h-5 w-5 text-red-500" />
          </div>
          <div className="text-xl font-bold">{formatCurrency(1800)}</div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-md">
        <h2 className="text-lg font-bold">Budget Overview</h2>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Groceries</span>
            <span>70%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div className="bg-blue-600 h-2 rounded" style={{ width: '70%' }}></div>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Entertainment</span>
            <span>45%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div className="bg-green-500 h-2 rounded" style={{ width: '45%' }}></div>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Savings</span>
            <span>90%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div className="bg-yellow-500 h-2 rounded" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-md">
        <h2 className="text-lg font-bold">Recent Transactions</h2>
        <div className="mt-4 space-y-2">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gray-200 rounded-full">
                  {transaction.icon}
                </div>
                <span>{transaction.name}</span>
              </div>
              <span className={transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}>
                {formatCurrency(transaction.amount)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="bg-green-500 text-white p-2 rounded-md flex items-center justify-center space-x-2">
          <PiggyBankIcon className="h-5 w-5" />
          <span>Save</span>
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-md flex items-center justify-center space-x-2">
          <CreditCardIcon className="h-5 w-5" />
          <span>Pay</span>
        </button>
      </div>
    </div>
  );
};

export default FinanceDashboard;
