function Header() {
  return (
    <header className="flex py-6 sm:justify-center lg:w-6/12 items-center mx-auto">
      <img
        src="https://1000logos.net/wp-content/uploads/2023/10/React-Logo.png"
        className="w-32 md:w-36 mr-5"
      />
      <h1 className=" lg:text-5xl md:text-4xl text-2xl leading-10  text-red-500 font-thin">
        THE REACT QUIZ
      </h1>
    </header>
  );
}

export default Header;
