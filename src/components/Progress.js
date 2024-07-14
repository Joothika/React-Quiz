function Progress({ index, numQues, points, sumPoints, answer }) {
  return (
    <section className="grid justify-items-center mt-8">
      <progress
        max={numQues}
        value={index + Number(answer !== null)}
        className="w-5/12 "
      />
      <header className="sm:w-5/12 mx-auto mt-6 text-gray-500 flex justify-between ">
        <p className="text-lg tracking-wide">
          Question <strong>{index + 1}</strong> / {numQues}
        </p>
        <p className="text-lg tracking-wide">
          Points <strong>{points}</strong> / {sumPoints}
        </p>
      </header>
    </section>
  );
}

export default Progress;
