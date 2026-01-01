export default function Button({ children }) {
  function handleClick() {
    alert("clicked");
  }

  return (
    <button onClick={handleClick} className="btn">
      {children}
    </button>
  );
}
