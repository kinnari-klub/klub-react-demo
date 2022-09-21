import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
interface Props {
    expense : any
}

const ExpenseItem = (props: Props) => {
    return <li>
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
            </div>
            <div className="expense-item__price">${props.expense.amount}</div>
        </Card>
    </li>
}

export default ExpenseItem;