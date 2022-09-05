import React from "react";
import { TodoContext } from "./TodoContext";
import './TodoSearch.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    };
    
    return (
        <input 
            className="todo-search" 
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
};

export { TodoSearch };