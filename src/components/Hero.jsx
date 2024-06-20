import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero  ">
      <div className="hero-content text-center  bg-[#f3f3f3] my-8 rounded-xl px-10 max-w-screen-7xl">
        <div className="">
          <div className="banner-container  p-4 md:flex-row-reverse justify-between items-center flex flex-col ">
          <div className="banner-image ">
              <img
          
                src="https://i.ibb.co/ThJ40V8/banner-Book.png"
                alt="bannerBookImage "
              />
            </div>
            <div className="banner-content ">
              <h2 className="banner-title mb-4 text-gray-900 font-playfair-display font-bold md:text-6xl leading-14 text-4xl">
                Books to freshen up your bookshelf
              </h2>
              <Link
                to="/List"
                href="listed_books_page.html"
                className="inline-flex md:p-5 justify-center items-center gap-4 text-white text-center font-work-sans font-bold text-lg bg-green-500 rounded-lg px-2 py-2"
              >
                View The List
              </Link>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
