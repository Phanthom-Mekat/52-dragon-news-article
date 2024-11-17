import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if (loading) {
        return <div>loading...</div>;
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to={'/auth/login'}/>
    );
};

export default PrivateRouter;