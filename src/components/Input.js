import styles from "./TodoGenerator.module.css"

const Input = (props) => {
	return <input  type="text" value={props.todo} className={styles.input} onChange={(e) => props.onSetTodo(e.target.value)}></input>
}

export default Input;