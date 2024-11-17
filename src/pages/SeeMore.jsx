import { useLoaderData, useNavigate } from "react-router-dom";
import RightAside from "../components/aside-components/RightAside";
import Header from "../components/Header";

const SeeMore = () => {
    const { data } = useLoaderData(); // Get data from loader
    const news = data[0]; // First item in the data array
    const navigate = useNavigate(); // For Back button navigation

    return (
        <div>
            <Header />
            <div className="mt-5 grid grid-cols-12 gap-4">
                {/* Main Content Section */}
                <div className="col-span-9 px-5">
                    {/* Back Button */}

                    {news ? (
                        <div className="p-5 border rounded shadow-md">
                            {/* Thumbnail Image */}
                            <img
                                src={news.image_url}
                                alt={news.title}
                                className="w-full object-cover rounded"
                            />

                            {/* News Title */}
                            <h1 className="text-2xl font-bold mt-4">{news.title}</h1>

                            {/* Author Section */}
                            <div className="flex items-center mt-3">
                                <img
                                    src={news.author.img}
                                    alt={news.author.name}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                    <p className="text-gray-800 font-semibold">{news.author.name}</p>
                                    <p className="text-gray-500 text-sm">
                                        {new Date(news.author.published_date).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            {/* News Details */}
                            <p className="mt-4 text-gray-700">{news.details}</p>

                            {/* Like Button */}
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-sm text-gray-600">
                                    Rating: {news.rating.number} ({news.rating.badge})
                                </p>
                                <button className="flex items-center">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/2107/2107956.png" // Heart icon image
                                        alt="Like"
                                        className="w-6 h-6 mr-2"
                                    />
                                    <span className="text-gray-600">Like</span>
                                </button>
                            </div>
                            <button
                        className=" bg-[#D72050] btn  mb-4"
                        onClick={() => navigate(-1)}>
                        All news in this category
                    </button>
                        </div>
                    ) : (
                        <p className="text-gray-500">No news available</p>
                    )}
                </div>

                {/* Right Sidebar */}
                <aside className="col-span-3">
                    <RightAside />
                </aside>
            </div>
        </div>
    );
};

export default SeeMore;
