import "./ExpenseDate.css";
import moment from 'moment';
interface Props {
    date: Date
}

const ExpenseDate = (props: Props) => {
    const month = moment(props.date).format('MMMM');
    const day = moment(props.date).format('DD');
    // const year = props.date.getFullYear();
    const year = moment(props.date).format('YYYY');
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}

export default ExpenseDate;