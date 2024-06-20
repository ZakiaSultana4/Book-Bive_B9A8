import { useEffect, useState } from "react";
import Hero from "../components/Hero";
// import wave from "../assets/wave.svg";
import Books from "./Books";
const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`/books.json`)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="">
      <div className="flex relative flex-col justify-center items-center ">
        <Hero />
      </div>
      <div className="container mx-auto px-5 md:px-10 text-center font-work font-bold text-28 rounded-lg bg-opacity-5 p-4 mb-4 mt-10">
        <h1 className="text-center  text-4xl font-bold leading-normal">
        All Books Are Here
        </h1>
      </div>
      <div className=" container mx-auto px-5 md:px-10 grid md:grid-cols-3 gap-5 my-10 grid-cols-1">
        {books.map((book) => (
          <Books key={book} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
