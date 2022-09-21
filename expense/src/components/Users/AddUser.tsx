import React from "react";
import Card from "../UI/Card";
import "./AddUser.css";

const AddUser = () => {

    const addHandler = (event: React.FormEvent) => {
        event.preventDefault();
    }

    return (
        <Card className="">
            <form onSubmit={addHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" />
            </form>
        </Card>
    )
}

export default AddUser;