import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Register = () => {
    const {createUser, setUser} = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUser(email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })

    }
    return (
        <>
            <div className="hero bg-base-200 h-screen">
                <div className="flex-col">
                    <div className=" w-96 bg-base-100  shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <div className="text-center mb-5">
                                    <h1 className="text-2xl font-bold">Register your account</h1>
                                </div>
                                <hr />

                                <label className="label mt-2">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                <label className="label mt-2">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="image_url" className="input input-bordered" required />
                                <label className="label mt-2">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Register</button>
                            </div>
                        </form>
                        <p className="text-center pb-2 ">
                            <small>Already have an account? <Link  className='text-green-600' to="/auth/login">Login</Link></small>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;