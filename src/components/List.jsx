

function List(props) {

    const {tasks,handleTaskRemoval,handleTaskEdit} = props;
    const listdata = tasks.map((task,index) => (<div>
        <li key={index}>{task} </li>
        <button onClick={() => {handleTaskRemoval(index)}}>Delete</button> 
        <button onClick={()=>{handleTaskEdit(index)}}>Edit</button>
        </div>));
  return (
    <div>List:
        <ul>
            {listdata}
        </ul>

    </div>
  )
}

export default List