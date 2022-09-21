import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.scss";

const MealItemForm = (props: any) => {
  
  const [amountIsValid, setAmountValid] = useState(false);
  const [amount, setAmount] = useState(1);
  const amountRef = useRef();
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log("amount added", amount, amountRef.current);
    setAmount(amount);
    if (amount < 1 || amount > 5) {
        setAmountValid(false);
      return;
    }
    props.onAddToCart(amount);
  };
  const amountHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setAmount(parseInt(event.currentTarget.value));
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        label="Qunatity"
        ref={amountRef}
        onChange={amountHandler}
        input={{
          id: "amount_" + props.id,
          value: amount,
          type: "number",
          min: "1",
          max: "15",
          step: "1",
        }}
      />
      <button onClick={submitHandler}>+ Add</button>
      {!amountIsValid && <p>Please enter valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
