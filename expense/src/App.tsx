import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import AddUser from './components/Users/AddUser';
import { ExpenseData } from './utils/utils';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Home Loan',
    amount: 94.12,
    date: new Date(),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2019, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense: ExpenseData) => {
    setExpenses((prevExpense: any) => {
      return [expense, ...prevExpense]
    })
  }

  return (
    <div>
      {/* <AddUser /> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
    
  );
}

export default App;
