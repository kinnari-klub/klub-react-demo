import "./Card.css";

interface Props {
    className: string,
    children: React.ReactNode
}

const Card = (props: Props) => {
    const classes = 'card ' + props.className
    return <div className={classes}>{props.children}</div>;
}

export default Card;