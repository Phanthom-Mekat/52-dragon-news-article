import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <>
            <section className="flex items-center gap-2 bg-gray-100 p-2">
                <Link to="/news" className="bg-[#D72050] px-3 py-2 w-20 rounded-sm">Latest</Link>
                <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                    <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, deleniti.</Link>
                    <Link to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, deleniti.</Link>
                    <Link to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. .</Link>
                </Marquee>
            </section>
        </>
    );
};

export default LatestNews;