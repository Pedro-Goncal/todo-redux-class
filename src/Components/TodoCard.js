import { Checkbox, FormControlLabel } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

//Redux
import { useDispatch } from "react-redux";
import { removeTodo, completeTodo } from "../Redux/actions/todoActions";

function TodoCard({ todo }) {
  const dispatch = useDispatch();

  const todoTime = new Date(parseInt(todo.time)).toDateString();

  return (
    <div
      key={todo.id}
      className="todoCard"
      style={
        todo.completed
          ? { backgroundColor: "#b4ffa8" }
          : { backgroundColor: "#ffffffc9" }
      }
    >
      <div className="todoCard__check">
        <FormControlLabel
          control={
            <Checkbox
              onClick={() => dispatch(completeTodo(todo.id))}
              name="checked"
              color="primary"
            />
          }
        />
      </div>

      <div className="todoCard__todoContainer">
        <div className="todoCard__time">{todoTime}</div>
        <div className="todoCard__title">
          <h2>{todo.todo.title}</h2>
        </div>

        <div className="todoCard__text">
          <p>{todo.todo.description ? todo.todo.description : null}</p>
        </div>
      </div>
      <div className="todoCard__delete">
        <DeleteForeverIcon
          style={{ fontSize: "35px" }}
          onClick={() => dispatch(removeTodo(todo.id))}
        />
      </div>
    </div>
  );
}

export default TodoCard;
