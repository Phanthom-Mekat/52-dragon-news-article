import { FaFacebook, FaGoogle } from "react-icons/fa";
const LoginWith = () => {
    return (
        <div className="w-full space-y-2 mt-5">
            <button className="btn btn-outline w-9/12"><FaGoogle/> Login With Google </button>
            <button className="btn btn-outline w-9/12"><FaFacebook/> Login With Facebook</button>
        </div>
    );
};

export default LoginWith;