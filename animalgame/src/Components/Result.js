import '../Assets/Styles/Result.css';

export default function Result({ result }) {
  return (
    <div className="result">
      <h2>Result</h2>
      {result === 'win' && <h2 className="win-text">Win</h2>}
      {result === 'lose' && <h2 className="lose-text">Loose</h2>}
    </div>
  );
}
