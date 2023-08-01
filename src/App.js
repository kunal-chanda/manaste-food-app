import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";

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
    <>
    <UserContext.Provider value={{loggedInUser : userName}}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </>
  );
}

export default App;
