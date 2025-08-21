import * as React from "react";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaTimes,
} from "react-icons/fa";

interface TeamModalProps {
  open: boolean;
  onClose: () => void;
  item: {
    name: string;
    title: string;
    imgSrc: string;
    linkedin: string;
    facebook: string;
    instagram: string;
    description?: string;
    education?: string[]; // Optional
    qualifications?: string[]; // Optional
  };
}

const TeamModal: React.FC<TeamModalProps> = ({ open, onClose, item }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex items-center justify-center p-4"
    >
      <Box className="bg-gray-900 text-white rounded-lg p-6 shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl overflow-y-auto h-[75vh] md:h-[75vh] relative"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          className="absolute top-4 right-4 text-white"
        >
          <FaTimes size={20} color="white"/>
        </IconButton>

        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          className="text-center text-xl font-bold"
        >
          {item.name}
        </Typography>
        <Typography
          id="modal-modal-description"
          className="mt-2 text-center text-sm text-gray-400"
        >
          {item.title}
        </Typography>
        <Box className="mt-4 flex justify-center items-center h-[250px] w-full">
          <img
            src={item.imgSrc}
            alt={item.name}
            className="rounded-lg h-full"
          />
        </Box>
        <Box className="mt-10 flex justify-evenly">
          <div className="flex items-center justify-center gap-2">
            <a
              href={item.linkedin}
              className="flex opacity-50 hover:opacity-100 transition-opacity duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href={item.facebook}
              className="flex opacity-50 hover:opacity-100 transition-opacity duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare size={25} />
            </a>
            <a
              href={item.instagram}
              className="flex opacity-50 hover:opacity-100 transition-opacity duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </Box>
        <br/>
        <Typography
          id="modal-modal-description"
          className="mt-12 text-sm text-gray-300"
        >
          {item.description && <>{item.description}</>}
        </Typography>
        <div className="mt-10">
          {item.education && (
            <Box className="mt-4">
              <Typography variant="h6" className="font-bold text-md text-gray-300">
                Academic Education:
              </Typography>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-300">
                {item.education.map((education, index) => (
                  <li key={index}>{education}</li>
                ))}
              </ul>
            </Box>
          )}
          {item.qualifications && (
            <Box className="mt-4">
              <Typography variant="h6" className="font-bold text-md text-gray-300">
                Qualifications:
              </Typography>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-300">
                {item.qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </Box>
          )}
        </div>
      </Box>
    </Modal>
  );
};

export default TeamModal;
