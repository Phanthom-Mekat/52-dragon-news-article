import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUsOn = () => {
    return (
        <div className="mt-5">
            <h2 className="font-bold">Find Us On</h2>
            <div className="join flex w-9/12 mt-3  *:bg-base-100 join-vertical">
                <button className="btn justify-start join-item"><FaFacebook/> Facebook</button>
                <button className="btn justify-start join-item"><FaTwitter/> Twitter</button>
                <button className="btn justify-start join-item"><FaInstagram/> Instagram</button>
            </div>
        </div>
    );
};

export default FindUsOn;