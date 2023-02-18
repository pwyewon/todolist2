import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../todoContext'

const Item = ({itemValue}) => {
    const {dispatch} = useContext (MyContext);
    const navigate = useNavigate();

    const dataChange =(id,type)=>{
        if(type==='update'){
            navigate('/update', {state:id})
        }else{
            dispatch({type:'remove', id});

    }
}

  return (
    <li>
        <input type = "checkbox" />
        {itemValue.todo}
        <button onClick = {()=> dataChange (itemValue.id,'update')}> 수정 </button>
        <button onClick = {()=> dataChange (itemValue.id,'delet')}> 수정 </button>
    </li>

  )
}


export default Item