import axios from "axios";
import { useMovies } from "../../../../store";
import "./ListAction.css";

function ListAction(props: {
  title: string;
  Icon: React.ElementType;
  labels: { text: string; param: string }[];
}) {
  const { setMovies } = useMovies();

  const clickHandler = (props: { param: string }): void => {
    axios
      .get(`http://localhost:3001/movies?` + props.param)
      .then((res) => setMovies(res.data));
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button">
        {props.title} <props.Icon />
      </button>
      <div className="dropdown-content">
        {props.labels.map((l, i) => (
          <label
            onClick={() => clickHandler({ param: l.param })}
            className="f-w-500"
            key={i}
          >
            {l.text}
          </label>
        ))}
      </div>
    </div>
  );
}

export default ListAction;
