import React, { FormEventHandler, useState } from "react";
import "./ExpenseForm.css";
interface Props {
    onCancelExpense: () => void,
    onSaveExpense: (data: any) => void,
}

const ExpenseForm = (props: Props) => {
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    const titleChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }
    const amountChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setAmount(event.currentTarget.value);
    }
    const dateChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setDate(event.currentTarget.value);
    }
    const reset = () => {
        setTitle('');
        setAmount('');
        setDate('');
    }
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        }
        props.onSaveExpense(expenseData);
        reset();
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" 
                max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
            </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancelExpense}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;