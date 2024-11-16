import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="flex-col">
                    <div className=" w-96 bg-base-100  shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <div className="text-center mb-5">
                                    <h1 className="text-2xl font-bold">Login your account</h1>                                    
                                </div>
                                <hr />

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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Login</button>
                            </div>
                        </form>
                        <p className="text-center px-5 pb-5">
                            <small>Dont have an account? <Link className='text-red-600' to="/auth/register">Register</Link></small>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;