function Start({ questions, dispatch }) {
  const numques = questions.length;
  return (
    <section className="my-20 grid justify-items-center gap-y-10">
      <h2 className="text-2xl sm:text-4xl font-semibold text-white ">
        Welcome to the React Quiz!
      </h2>
      <h3 className="sm:text-xl text-white">
        {numques} questions to test your react knowledge
      </h3>
      <button
        className="text-lg px-10 py-2 bg-slate-500 text-green-300 font-semibold rounded-full"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </section>
  );
}

export default Start;
