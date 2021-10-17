import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import s from "./AppBar.module.css";
import { getIsLoggedIn } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Link className={s.link} to="/">
          Homepage
        </Link>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}
