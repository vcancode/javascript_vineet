import React from 'react'

const task = ({task,dispatch}) => {
  return (
    <div className='task-div'>
       <div> <h2 className={`${task.complete==true?`tick`:``}`}>{task.name}</h2></div>  
        <div className='task-btns'>
            <button onClick ={()=>dispatch({type:"done",id : task.id})} className={`done`}>DONE</button>
            <button onClick ={()=>dispatch({type:"delete",id : task.id})} className='delete'>DELETE</button>
        </div>
    </div>
  )
}

export default task