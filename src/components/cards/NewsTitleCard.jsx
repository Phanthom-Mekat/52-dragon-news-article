import { FaEye, FaStar, FaShareAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import PropTypes from "prop-types";

const NewsTitleCard = ({ news }) => {
    const {
        title,
        image_url,
        details,
        total_view,
        rating,
        author: { name, published_date, img },
    } = news;

    return (
        <div className="card w-full bg-base-100 shadow-md rounded-lg">
            {/* Header */}
            <div className="flex items-center p-4 border-b border-gray-200 bg-gray-200">
                <img
                    src={img}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                    <h2 className="font-semibold text-sm">{name}</h2>
                    <p className="text-gray-500 text-xs">{published_date}</p>
                </div>

                <div className="ml-auto flex gap-3">
                    <CiBookmark className="text-gray-500 text-lg hover:text-gray-800 cursor-pointer" />
                    <FaShareAlt className="text-gray-500 hover:text-gray-800 cursor-pointer" />
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <img
                    src={image_url}
                    alt={title}
                    className="w-full  object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                    {details}
                </p>
                <button className="text-red-500 font-medium text-sm mt-2">
                    Read More
                </button>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    <span className="text-sm">{rating.number}</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaEye className="text-gray-500" />
                    <span className="text-sm">{total_view}</span>
                </div>
            </div>
        </div>
    );
};
NewsTitleCard.propTypes = {
    news: PropTypes.object.isRequired,
};

export default NewsTitleCard;
