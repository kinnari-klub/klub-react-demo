import React from 'react';
import classes from './Input.module.scss';
interface Props {
    input: any,
    label: string,
    onChange: any
}

const Input = React.forwardRef((props: Props, ref: any) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} ref={ref} onChange={props.onChange}/>
    </div>
})

export default Input