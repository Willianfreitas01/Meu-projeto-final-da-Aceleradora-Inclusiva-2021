import { useState } from 'react'
import { FiTrash2, FiPlus} from 'react-icons/fi'
import './List.style.css'
const List =()=> { 
const [list, setList] = useState ( [] ) 
const [newTask, setNewTask] = useState ('')
function handleCreateNewTask() {
  
    const task = {
        id: Math.random(),
        title: newTask,
        isComplete:false
    }
    if(task.title === ''){
        return
    }
setList ([...list, task])
setNewTask('')
}
return (
<section className= 'List'>
<header>
<h2>Tarefas a fazer:</h2>

<div className='input-container'>
<input 
type='text'
placeholder='Adicionar nova tarefa'
onChange={e=> setNewTask(e.target.value)}
/>
<button className='add-task' onClick={handleCreateNewTask}> 
<FiPlus size={16} color='#fff'/>
</button>
</div>
</header>
<main>
    <ul>
     {
     list.map(task => 
        <li>
        <div>
        <label className='checkbox-container'>
            <input
            type='checkbox'
            onClick={() =>{}}
            />
            <span className='checkmark'></span>
        </label>
        <p></p>
        </div>
        <button className='remove task' onClick={() =>{}}>
            <FiTrash2 size={16} />
        </button>
        </li>
     )
}
       </ul>
      </main>
      </section>
)
}
export default List 