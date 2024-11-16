import { useLoaderData } from "react-router-dom";
import NewsTitleCard from "../components/cards/NewsTitleCard";

const CategoriesNews = () => {
    const {data} =useLoaderData();
    console.log(data)
    return (
        <div>
            <h2 className="bold">Dragon News Home</h2>
            <h3 className="text-gray-500">Total News ({data.length})</h3>
            <div className="space-y-5 mt-5"> 
                {
                    data.map(news => <NewsTitleCard key={news._id} news={news}></NewsTitleCard>)
                }
            </div>
        </div>
    );
};

export default CategoriesNews;