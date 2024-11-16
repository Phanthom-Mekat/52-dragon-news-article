import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftAside from "../components/aside-components/LeftAside";
import Navbar from "../components/Navbar";
import RightAside from "../components/aside-components/RightAside";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
    return (
        <>
          <header>
            <Header/>
            <section className="w-11/12 mx-auto mt-5">
                <LatestNews/>
            </section>
          </header>
          <nav className="w-11/12 mx-auto mt-5">
            <Navbar/>
          </nav>
          <main className="w-11/12 mx-auto mt-10 gap-3 grid grid-cols-12">
            <aside className="col-span-3"><LeftAside/></aside>
            <section className="col-span-6"><Outlet></Outlet></section>
            <aside className="col-span-3"><RightAside/></aside>
          </main>
        </>
    );
};

export default Mainlayout;