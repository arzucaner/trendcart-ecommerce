import CardCount from "./CardCount";
import Logo from "./Logo";
import NavTrend from "./NavTrend";
import Search from "./Search";
import User from "./User";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between gap-3 md:gap-10 px-3 md:px:10 h-16 bg-blue-600 text-slate-100">
            <Logo />
            <NavTrend />
            <Search />
            <User />
            <CardCount />
        </div>
    )
}

export default Navbar;