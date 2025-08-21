import React, { useState } from "react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import teamMembers, { TeamMember } from "./items";
import TeamModal from "./TeamModal";



const Members: React.FC<{ member: TeamMember; index: number; onImageClick: (index: number) => void }> = ({
  member,
  index,
  onImageClick,
}) => {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4 mt-10">
      <div className="flex flex-col">
        {/* Avatar */}
        <a  className="mx-auto">
          <img
            className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 h-[300px] w-[250px] cursor-pointer"
            src={member.avatar}
            alt={member.name}
            height={"300px"}
            width={"250px"}
            onClick={() => onImageClick(index)}
          />
        </a>

        {/* Details */}
        <div className="text-center mt-6 dark:text-white text-black ">
          {/* Name */}
          <h1 className="text-xl font-bold mb-1">{member.name}</h1>

          {/* Title */}
          <div className="font-light mb-2">{member.city}, {member.state}</div>

          {/* Social Icons */}
          <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 gap-x-3">
            {/* Facebook */}
            <a
              href={member.facebook}
              className="flex opacity-50 hover:opacity-100 transition-opacity duration-300 "
              target="_blank"
            >
              <FaFacebookSquare size={25} />
            </a>

            {/* Instagram */}
            <a
              href={member.instagram}
              className="flex opacity-50 hover:opacity-100 transition-opacity duration-300 "
              target="_blank"
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamMembers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-wrap">
      {teamMembers.map((member, index) => (
        <Members
          key={index}
          member={member}
          index={index}
          onImageClick={handleOpenModal}
        />
      ))}
      {modalOpen && (
        <TeamModal
          open={modalOpen}
          onClose={handleCloseModal}
          item={teamMembers[currentIndex]}
        />
      )}
    </div>
  );
};

export default TeamMembers;
