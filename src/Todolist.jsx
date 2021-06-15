import React from 'react';
import './App.css';
const Todolist=(props)=>
{
return (
    <>
    <div className="row align-items-start">
       <div className="col px-1 " id ="iconbox">
            <i id="icons" className="fa fa-trash" aria-hidden="false"
                onClick={()=>
                    {
                        props.del(props.id);
                    }} >
                    
            </i>
       </div>
        <div className="col">
            <li> {props.text} </li>
        </div>
        </div>
    </>
    );
}
export default Todolist;