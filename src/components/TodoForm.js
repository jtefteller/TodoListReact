import { useState } from 'react';
import TodoGenerator from "./TodoGenerator";
import Todo from "./Todo"
import styles from "./TodoForm.module.css"

const TodoForm = (props) => {
	const [todos, setTodos]	= useState([]);

	const onSetTodos = (todo) => {
		return () => {
			const ts = [...todos]
			ts.push(todo)
			setTodos(ts)
		}
	}

	return (

		<div>
			<div className={styles.form}>
				<TodoGenerator onSetTodos={onSetTodos} todo="" />
			</div>
			{todos.length > 0 && todos.map((todo, idx) => (
				<Todo key={idx} todo={todo}/>
			))}
		</div>
	)
}

export default TodoForm;
