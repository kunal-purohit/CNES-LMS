import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import TeamModal from "./TeamModal";
import items from "./items";

const OurTeam: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const totalItems = items.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const getVisibleItems = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      return 1;
    } else {
      return 1;
    }
  };

  return (
    <div className="carousel-container overflow-hidden relative">
      <div
        className="carousel-inner flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * (100 / totalItems)}%)`,
          width: `${totalItems * (100 / getVisibleItems())}%`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="carousel-item flex-none box-border p-4"
            style={{ width: `${100 / totalItems}%` }}
          >
            <div className="flex flex-col items-center">
              <img
                className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 h-[333px] w-[250px] cursor-pointer"
                src={item.imgSrc}
                alt={item.name}
                height={"250px"}
                width={"250px"}
                onClick={() => handleOpenModal(index)}
              />

              <div className="text-center mt-6">
                <h1 className="dark:text-white text-xl font-bold mb-1">
                  {item.name}
                </h1>
                <div className="dark:text-[#ecdef] font-light mb-2">
                  {item.title}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <a
                    href={item.linkedin}
                    className="flex opacity-50 hover:opacity-100 transition-opacity duration-300 "
                    target="_blank"
                  >
                    <FaLinkedin size={25} />
                  </a>
                  <a
                    href={item.facebook}
                    className="flex opacity-50 hover:opacity-100 transition-opacity duration-300 "
                    target="_blank"
                  >
                    <FaFacebookSquare size={25} />
                  </a>
                  <a
                    href={item.instagram}
                    className="flex opacity-50 hover:opacity-100 transition-opacity duration-300 "
                    target="_blank"
                  >
                    <FaInstagram size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className=" absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        <MdNavigateBefore size={25} />
      </button>
      <button
        onClick={handleNext}
        className=" absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        <MdNavigateNext size={25} />
      </button>
      {modalOpen && (
        <TeamModal
          open={modalOpen}
          onClose={handleCloseModal}
          item={items[currentIndex]}
        />
      )}
    </div>
  );
};

export default OurTeam;
