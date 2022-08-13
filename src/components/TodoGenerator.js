import { useState } from "react"
import styles from "./TodoGenerator.module.css"
import Input from "./Input"

const TodoGenerator = (props) => {
	const [todo, setTodo] = useState("");

	const onClickHandler = (todo) => {
		return props.onSetTodos(todo)
	}

	const onSetTodo = (todo)  => {
		return setTodo(todo)
	}

	return (
		<div className={styles.container}>
			<label>Create a New Todo</label>
			<div className={styles.item}>
				<Input  onSetTodo={onSetTodo} todo={todo} />
				<button className={styles.button} onClick={onClickHandler(todo)}>Add Todo</button>
			</div>
		</div>
	)
}

export default TodoGenerator;