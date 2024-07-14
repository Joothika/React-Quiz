function NextButton({ dispatch, answer, index, numQues }) {
  if (answer === null) return null;
  if (index < numQues - 1)
    return (
      <button
        className="w-32 py-3 mt-5 text-white rounded-full bg-slate-600 "
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQues - 1)
    return (
      <section className="grid justify-items-end w-4/12 mx-auto">
        <button
          className="w-32 py-3 mt-5 text-white rounded-full bg-slate-600 "
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      </section>
    );
}

export default NextButton;
