import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { TeamMember } from "./items";

const TeamModal: React.FC<{
  open: boolean;
  onClose: () => void;
  item: TeamMember;
}> = ({ open, onClose, item }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
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
            className="rounded-full w-[150px] h-[150px] mx-auto mb-4"
            src={item.avatar}
            alt={item.name}
          />

          {/* Name */}
          <h2 className="text-2xl font-bold mb-2">{item.name}</h2>

          {/* Title */} 
          <p className="text-gray-200 mb-4">{item.city}, {item.state}</p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
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
          <div>
            <ul className="list-disc text-start ml-[5%]  flex flex-col gap-y-2 text-gray-400">
              <li className="text-md">
                <b className="mr-2 ">City:</b>
                {item.city}
              </li>
              <li className="text-md">
                <b className="mr-2">State:</b>
                {item.state}
              </li>
              <li className="text-md">
                <b className="mr-2">Membership ID:</b>
                {item.memID}
              </li>
              <li className="text-md">
                <b className="mr-2">Status:</b>
                {item.status}
              </li>
              <li className="text-md">
                <b className="mr-2">Valid Till:</b>
                {item.validTill}
              </li>
              <li className="text-md">
                <b className="mr-2">Professional Qualification:</b>
                {item.qualification}
              </li>
              <li className="text-md">
                <b className="mr-2">Continuing professional development:</b>
                {item.cpd}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
