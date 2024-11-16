import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    const {user}= useContext(AuthContext);
    return (
        <>
            <section>
                <div className="flex justify-between  items-center gap-10">
                    <div>{ user && user.email }</div>
                    <div className="flex  items-center gap-5 text-gray-600">
                        <Link to="/">Home</Link>
                        <Link to="/about" >About</Link>
                        <Link to="/career">Career</Link>
                    </div>
                    <div className="flex   items-center gap-2">
                        <img src="/user.png" alt="" />
                        <Link to="auth/login" className="btn btn-neutral">Login</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;