import React from "react";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import './TodoItem.css';

function TodoItem(props) {

    return(
        <li className="todo-item">
            <CompleteIcon 
                completed={props.completed}
                onComplete={props.onComplete}
            />
            <p className={`todo-item_p ${props.completed && 'todo-item_p--completed'}`}>{props.content}</p>
            <DeleteIcon 
                onDelete={props.onDelete}
            />
        </li>
    );
};

export { TodoItem };