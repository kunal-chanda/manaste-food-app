import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [userName, setUserName] = useState();

  useEffect(()=>{
    //user name after authentication
    let user = {
      name: "Kunal Chanda",
    }
    setUserName(user.name)
  },[]);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : userName,setUserName}}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
