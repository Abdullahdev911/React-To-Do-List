

function Input(props) {

    const {inputText,handleInputText,handleTaskAddition} = props;
  return (
    <>
    <h1>To-Do-List</h1>
    <input type="text" value={inputText} onChange={handleInputText} />
    <button onClick={handleTaskAddition}>Add Task</button>
    </>
  )
}

export default Input