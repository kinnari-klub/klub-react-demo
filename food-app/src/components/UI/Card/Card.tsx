import classes from "./Card.module.scss";
interface Props {
    children: React.ReactNode
}

const Card = (props: Props) => {
    return <section className={classes.card}>{props.children}</section >
}

export default Card;