import React from "react";
import { TodoContext } from "./TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange} 
                placeholder="Cortar la cebolla para la cena"
            />
            <div className="todoform-button-container">
                <button
                    className="todoform-button todoform-button--cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="todoform-button todoform-button--add"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };