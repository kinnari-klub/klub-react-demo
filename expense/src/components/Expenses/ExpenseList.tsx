import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
interface Props {
  items: any[];
}

const ExpenseList = (props: Props) => {
  if (props.items.length == 0) {
    return <h4>No expenses found.</h4>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </ul>
  );
};

export default ExpenseList;
