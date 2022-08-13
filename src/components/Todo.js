import styles from "./Todo.module.css"

const Todo = (props) => {
	return (
		<div className={styles.todo}>
			{props.todo}
		</div>
	)
}
export default Todo;