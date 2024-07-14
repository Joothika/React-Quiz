function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <section className="grid justify-items-center">
      {question.options.map((options, index) => (
        <button
          className={`w-[22rem] sm:w-[35rem] py-3 mb-5 rounded-full bg-slate-600 sm:text-lg text-left indent-6 text-white font-light hover:shadow-sm hover:shadow-slate-400 hover:translate-x-[1rem] ${
            index === answer ? "translate-x-3" : ""
          }  ${
            hasAnswered
              ? index === question.correctOption
                ? "bg-emerald-500"
                : "bg-orange-600 text-black"
              : " "
          }`}
          key={options}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {options}
        </button>
      ))}
    </section>
  );
}

export default Options;
