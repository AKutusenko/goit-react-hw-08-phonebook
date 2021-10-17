import generalImage from "../../images/phone-book.png";
import s from "./HomeView.module.css";

export default function HomeView() {
  return <img className={s.img} src={generalImage} alt="" />;
}
