import close from "../images/icon-close.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function Lightbox({
  products,
  slideIndex,
  previousSilde,
  nexSlide,
  setShowLightbox,
}) {
  return (
    <>
      <article className="bg-black bg-opacity-75 z-50 fixed top-0 left-0 right-0 bottom-0">
        <button onClick={() => setShowLightbox(false)}>
          <img src={close} alt="" className="w-8 absolute top-10 right-10 " />
        </button>
        <div className="flex items-center justify-center h-screen">
          {products.map((item, index) => (
            <div
              key={item}
              className={slideIndex === index + 1 ? "relative" : "hidden"}
            >
              <img
                src={item.mainImage}
                alt=""
                className="lg:w-full lg:h-[800px] lg:rounded-2xl "
              />
              <ul>
                <li>
                  <button
                    onClick={previousSilde}
                    className=" rounded-full bg-white p-5 shadow absolute left-4 top-1/2 -translate-y-1/2"
                  >
                    <FaChevronLeft />
                  </button>
                </li>
                <li>
                  <button
                    onClick={nexSlide}
                    className=" rounded-full bg-white p-5 shadow absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <FaChevronRight />
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
