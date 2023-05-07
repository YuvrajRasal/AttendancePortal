import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Teacher from "./Pages/Teacher";
import Class from "./Pages/Class";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeacherNew from "./Pages/TeacherNew";
import { useState } from "react";
import TeacherNewData from "./Pages/TeacherNewData";
import ForgotPassword from "./Pages/ForgotPassword";
import Profile from "./Pages/Profile";
import Attendance from "./Pages/Attendance";
import ProfileNew from "./Pages/ProfileNew";
function App() {
  // const [superSearch,setSuperSearch] = useState({});
  // const [selectedNews, setSelectedNews] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        {/* <Route exact path='/teacher' element={<Teacher/>}></Route> */}{" "}
        {/*orignal */}
        {/* <Route exact path='/teacher' element={<TeacherNew setSelectedNews={setSelectedNews}/>}></Route>  new */}
        <Route exact path="/teacher" element={<TeacherNewData />}></Route>
        <Route exact path="/class/:publishedAt" element={<Class />}></Route>
        <Route exact path="/profile" element={<ProfileNew />}></Route>
        <Route exact path="/attendance" element={<Attendance />}></Route>
        <Route
          exact
          path="/forgotPassword"
          element={<ForgotPassword />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
