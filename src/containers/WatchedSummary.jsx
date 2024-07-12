import countAverage from "../utils/countAverage";

const WatchedSummary = ({ watched }) => {
  const avgImdbRating = countAverage(watched.map((movie) => movie.imdbRating));
  const avgUserRating = countAverage(watched.map((movie) => movie.userRating));
  const avgRuntime = countAverage(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>
            {watched.length === 1
              ? `${watched.length} movie`
              : `${watched.length} movies`}
          </span>
        </p>

        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
