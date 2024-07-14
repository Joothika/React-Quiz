import Options from "./Options";

function Questions({ question, dispatch, answer }) {
  return (
    <>
      <h1 className="text-white text-sm sm:text-2xl tracking-wide font-medium flex justify-center my-10">
        {question.question}
      </h1>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </>
  );
}

export default Questions;
