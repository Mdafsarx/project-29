import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'btn btn-sm border-[#23BE0A] border-2 bg-white' : 'hover:text-[#23BE0A]'}>Home</NavLink>
                    <NavLink to={'/ListedBooks'} className={({ isActive }) => isActive ? 'btn btn-sm border-[#23BE0A] border-2 bg-white' : 'hover:text-[#23BE0A]'} >Listed Books</NavLink>
                    {/* <NavLink to={'/PageToRead'}  className={({ isActive }) => isActive ? 'btn btn-sm dborder-[#23BE0A] border-2 bg-white' : 'hover:text-[#23BE0A]'} >Pages to Read</NavLink> */}

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-[#59C6D1]">আমার বই</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 space-x-8 flex items-center *:font-bold">
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'btn border-[#23BE0A] border-2 bg-white' : 'hover:text-[#23BE0A]'}>Home</NavLink>
                    <NavLink to={'/ListedBooks'} className={({ isActive }) => isActive ? 'btn border-[#23BE0A] border-2 bg-white' : 'hover:text-[#23BE0A]'} >Listed Books</NavLink>
                    {/* <NavLink to={'/PageToRead'}  className={({ isActive }) => isActive ? 'btn border-[#23BE0A] border-2 bg-white' : 'hover:text-[#23BE0A]'} >Pages to Read</NavLink> */}
                </ul>
            </div>

            <div className="navbar-end space-x-3">
                <button className="inline-block rounded  bg-[#23BE0A] px-4 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl ">
                    Sing in
                </button>
                <button
                    className="inline-block rounded bg-[#59C6D2] px-4 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl  ">
                   Sing up
                </button>
            </div>

        </div>
    );
};

export default Navbar;