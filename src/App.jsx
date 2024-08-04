import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";


function App() {
  const [tasks,setTask] = useState(['GO TO GYM','Make BREAKFAST']);
  const [inputText,setInputText] = useState('');

  function handleTaskAddition(){
    if(inputText !==''){
      setTask(t => [...t,inputText]);
      setInputText('');
    }  
  }

  function handleInputText(event){
    setInputText(event.target.value);
  }

  function handleTaskRemoval(index){
    setTask(tasks.filter((_,i) => index !== i));
  }

  function handleTaskEdit(index){
    setInputText(tasks[index]);
    setTask(tasks.filter((_,i) => index !== i));

  }

  return (
    <>
    <div className="app-container">
      <Input inputText={inputText} handleInputText={handleInputText} handleTaskAddition={handleTaskAddition}/>
      <List tasks={tasks} handleTaskRemoval={handleTaskRemoval} handleTaskEdit={handleTaskEdit}/>
    </div>
    </>
  )
}

export default App
