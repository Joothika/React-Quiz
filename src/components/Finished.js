function Finished({ points, sumPoints, highscore, dispatch }) {
  const percent = ((points / sumPoints) * 100).toFixed(2);
  return (
    <>
      <h1 className="flex justify-center w-5/12 mx-auto px-20 py-5 bg-pink-600 mt-20 rounded-full text-white text-lg tracking-wider font-semibold">
        You scored {points} out of {sumPoints} ({percent}%)
      </h1>
      <p className="flex justify-center mt-5 text-blue-600 text-lg tracking-wider font-semibold">
        Highscore: {highscore} points
      </p>
      <section className="grid justify-items-end w-4/12 mx-auto">
        <button
          className="w-40 py-3 mt-8 text-white rounded-full bg-slate-600 "
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart Quiz
        </button>
      </section>
    </>
  );
}

export default Finished;
