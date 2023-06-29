export default function Display({ words }) {
  return (
    <div className="display">
      {words.map((word, idx) => (
        <div key={idx}>{word}</div>
      ))}
    </div>
  );
}
