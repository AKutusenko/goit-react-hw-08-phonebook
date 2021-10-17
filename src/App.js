import "./App.module.css";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import { Switch, Route } from "react-router-dom";
// import ContactsView from "./view/ContactsView/ContactsView";
import LoginView from "./view/LoginView/LoginView";
import RegisterView from "./view/RegisterView/RegisterView";
import WorkPlace from "./components/WorkPlace/WorkPlace";

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/" component={WorkPlace} />
      </Switch>
    </Container>
  );
}
