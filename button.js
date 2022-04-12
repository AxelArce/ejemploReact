export default function Button(props) {
  const saveOnClick = (event) => {
    event.preventDefault();
    props.power();
  };

  return (
    <button onClick={saveOnClick} {...props}>
      {props.text}
    </button>
  );
}
