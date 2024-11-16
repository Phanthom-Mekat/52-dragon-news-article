import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div className="hero bg-base-200 h-screen">
                <div className="flex-col">
                    <div className=" w-96 bg-base-100  shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <div className="text-center mb-5">
                                    <h1 className="text-2xl font-bold">Register your account</h1>
                                </div>
                                <hr />

                                <label className="label mt-2">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" required />
                                <label className="label mt-2">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="image_url" className="input input-bordered" required />
                                <label className="label mt-2">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />

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