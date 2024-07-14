import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const id = setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);
    return function () {
      clearInterval(id);
    };
  }, [dispatch]);
  return (
    <section className="w-32 py-3 mt-5 text-white rounded-full bg-slate-600 flex justify-center">
      0{mins} : {seconds}
    </section>
  );
}

export default Timer;
