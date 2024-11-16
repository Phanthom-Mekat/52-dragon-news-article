import moment from "moment";

const Header = () => {
    return (
        <>
            <section className="flex flex-col justify-center items-center" >
                <img src="./logo.png" alt=""  />
                <h3 className="text-xl text-gray-500">Journalism Without Fear or Favour</h3>
                <p className="text-gray-600">{moment().format("dddd, MMMM Do YYYY")}</p>
            </section>
        </>
    );
};

export default Header;