import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Teacher from './Pages/Teacher';
import Class from './Pages/Class';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
<BrowserRouter>
 <Routes>
     <Route exact path='/' element={<Login/>}></Route>
     <Route exact path='/teacher' element={<Teacher/>}></Route>
     <Route exact path='/class' element={< Class />}></Route>
 </Routes>
</BrowserRouter>
  );
}

export default App;
