import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../todoContext';
import '../todo.scss';
import Item from './item';

const List = () => {
    const  {data} = useContext (MyContext);

    return (
        <div class = "todo">
            <h2> Todolist (6) </h2>
            <Link to = '/write'> 할일등록 </Link>
            <ul>
                {data.map(obj=>(
                    <Item key = {obj.id} itemvalue = {obj} />
                ))}
            </ul>
        </div>
  )
}

export default List