import React ,{useState} from "react";
import Todolist from './Todolist';
function App()
{
    const [search ,setsearch]=useState("");
    const [items ,setitems]=useState([]);
    const listofitems=()=>
    {
        setitems((olditems)=>
        {
            return [...olditems,search];
        });
        setsearch("");
    };
    const InputEvent=(event)=>
    {
        setsearch(event.target.value);

    };
    const delitem=(props)=>
    {
      setitems((olditems) =>
      {
return olditems.filter((element,index)=>
{
    return index!==props; 
});
      });
    };
    return (
    <>
    <div className="container mt-5">
    <input  id ="input" className="form "  placeholder=" Add a Items" value={search} onChange={InputEvent}></input>
    <button  id ="bbutton" className=" btn btn-info" onClick={listofitems}>+</button>
    <h3>{search}</h3>
    <ul className="list">
        {
        items.map((item,index)=>
            {
                return (<Todolist text={item} id={index} key={index} del={delitem}/>);
            })
        }
    </ul>


    </div>
    </>
    );
}
export default App;