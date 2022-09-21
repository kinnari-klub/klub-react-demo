import { useState } from "react";
import { ExpenseData } from "../../utils/utils";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
interface Props {
    onAddExpense: (data: ExpenseData) => void
}

const NewExpense = (props: Props) => {
    const [isEdition, setEdition] = useState(false);
    const cancelHandler = () => {
        setEdition(false);
    }
    const addEditionHandler = () => {
        setEdition(true);
    }
    const saveHandler = (expenseData: ExpenseData) => {
        const data = {
            id: Math.random().toString(),
            ...expenseData
        }
        props.onAddExpense(data);
        setEdition(false);
    }

    return (
        <div className="new-expense">
            {!isEdition && <button onClick={addEditionHandler}>Add New Expense</button>}
            {isEdition && <ExpenseForm onCancelExpense={cancelHandler} onSaveExpense={saveHandler} />}
        </div>
    )
}

export default NewExpense;