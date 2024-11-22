export default function Result({ result }) {
    return (
      <div className="result">
        {result === 'win' && <h2>Congratulations! You Win!</h2>}
        {result === 'lose' && <h2>Oops! You Lose! Try Again.</h2>}
      </div>
    );
  }
  