import FindUsOn from "../right-aside-components/FindUsOn";
import LoginWith from "../right-aside-components/LoginWith";

const RightAside = () => {
    return (
        <div>
            <h2 className="font-bold">Login With</h2>
            <LoginWith/>
            <FindUsOn/>
        </div>
    );
};

export default RightAside;