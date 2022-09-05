import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoForm } from "./TodoForm";
import { CreateTodoButton } from './CreateTodoButton';
import { TodoContext } from './TodoContext';
import { Modal } from "./Modal";

function AppUI () {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Lo sentimos, hubo un error...</p>}
                {loading && <p>Espera, estamos cargando...</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
                {searchedTodos.map(todo => <TodoItem 
                    key={todo.content} 
                    content={todo.content} 
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.content)}
                    onDelete={() => deleteTodo(todo.content)}
                    />)}
            </TodoList>
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
};

export { AppUI };