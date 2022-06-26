import React from 'react'
import {Todo} from './model'
import { FaEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { MdOutlineDownloadDone } from 'react-icons/md'

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {
  return (
    <form className="todos_single">
        <span className="todos_single--text">{todo.todo}</span>
        <div>
            <span className="icon">
                <FaEdit />
            </span>
            <span className="icon">
                <AiFillDelete />
            </span>
            <span className="icon">
                <MdOutlineDownloadDone />
            </span>
        </div>
    </form>
  )
}

export default SingleTodo