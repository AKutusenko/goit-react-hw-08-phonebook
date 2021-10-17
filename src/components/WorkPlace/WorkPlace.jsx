import { getIsLoggedIn } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import ContactsView from "../../view/ContactsView/ContactsView";
import HomeView from "../../view/HomeView/HomeView";

export default function WorkPlace() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return <>{isLoggedIn ? <ContactsView /> : <HomeView />}</>;
}
