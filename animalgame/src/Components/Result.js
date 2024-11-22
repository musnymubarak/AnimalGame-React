export default function Result({ result }) {
    return (
      <div className="result">
        {result === 'win' && <h2>Win</h2>}
        {result === 'lose' && <h2>Loose</h2>}
      </div>
    );
  }
  