import moment from "moment";
import { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

interface Props {
    expenses: any[]
}

const Expenses = (props: Props) => {
    const [filterYear, setFilterYear] = useState('');

    const filterHandler = (year: string) => {
        setFilterYear(year);
    }

    const filteredItems = props.expenses.filter((item)=> {
        return filterYear != '' ? moment(item.date).format('YYYY') === filterYear : item;
    })

    return (
        <Card className="expenses">
            <div>
                <ExpenseFilter onFilter={filterHandler} selected={filterYear} />
            </div>
            {/* expense list */}
            <ExpenseList items={filteredItems} />
        </Card>
    )
}

export default Expenses;