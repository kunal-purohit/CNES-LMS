import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { TeamMember } from "./Ambassadors";
import { Box, Typography } from "@mui/material";

const TeamModal: React.FC<{
  open: boolean;
  onClose: () => void;
  item: TeamMember;
}> = ({ open, onClose, item }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div
        className="bg-gray-900 text-white rounded-lg p-6 shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl overflow-y-auto h-[75vh] md:h-[75vh] relative"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-700"
          onClick={onClose}
        >
          &#x2715;
        </button>

        {/* Avatar */}
        <div className="text-center">
          <img
            className="rounded-full w-32 h-32 mx-auto mb-4"
            src={item.avatar}
            alt={item.name}
          />

          {/* Name */}
          <h2 className="text-2xl font-bold mb-2">{item.name}</h2>

         

          {/* Social Icons */}
          <div className="mt-7 flex justify-center space-x-4">
            {/* Facebook */}
            <a
              href={item.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaFacebookSquare size={30} />
            </a>

            {/* Instagram */}
            <a
              href={item.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600"
            >
              <FaInstagram size={30} />
            </a>
          </div>
          {item.achivements && (
            <Box className="mt-4">
              <Typography variant="h6" className="font-bold text-md text-gray-200">
                <b> Achivements</b>
              </Typography>
              <ul className="mx-auto ml-40 list-disc text-start mt-2 text-lg text-gray-300">
                {item.achivements.map((achivements, index) => (
                  <li key={index}>{achivements}</li>
                ))}
              </ul>
              
            </Box>
          )}
       
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
