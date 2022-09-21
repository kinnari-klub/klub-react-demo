import React, { useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';
interface Props {
    isValid: boolean,
    id: string,
    label: string,
    type: string,
   value: string,
    onChange: () => {},
    onBlur: () => {},
}

export const Input = React.forwardRef((props: Props, ref: any) => {
  const inputRef: any = useRef();
  console.log("red", ref);
  const activate = () => {
    inputRef.current.focus();
  }
  useImperativeHandle(ref, ()=> {
    return {
      focus: activate // function name
    }
  });
  // to focus last input of the form  
  // useEffect(()=> {
    //   inputRef.current.focus();
    // }, []);
  
    return <div
    className={`${classes.control} ${
      props.isValid === false ? classes.invalid : ''
    }`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input
      ref={inputRef}
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>
});

export default Input;