export default function Search({ filterWords }) {
  return (
    <div className="search">
      <input onChange={filterWords} />
    </div>
  );
}
