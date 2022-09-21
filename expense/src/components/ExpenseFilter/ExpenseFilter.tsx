import { SelectHTMLAttributes, useState } from "react";
import "./ExpenseFilter.css";

interface Props {
  onFilter: (value: any) => void;
  selected: string
}

const ExpenseFilter = (props: Props) => {
    
    const [year, setYear] = useState(props.selected);

    const yearHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setYear(event.target.value);
        props.onFilter(event.target.value);
    }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {year}
        <select value={props.selected} onChange={yearHandler}>
          <option value="">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
