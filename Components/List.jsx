import './List.css'
import TodoItem from './TodoItem';
import { useState } from 'react';
const List = ({ todos, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) => todo.content.toUpperCase().includes(search.toUpperCase()));
    }

    const filteredData = getFilteredData();

    return (
        <div className='List'>
        <h4>To do List 🌱</h4>
            <input value={search}
                onChange={onChangeSearch}
                placeholder='Please enter your keywords' />
        <div className='list_wrapper'>
                {filteredData.map((todo) => <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />)}
            </div>
            </div>
    )
}

export default List;