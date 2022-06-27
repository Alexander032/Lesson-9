import {Routes, Route} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";


function App () {
  return (
   <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/Register'} element={<Register/>}/>
        <Route path={'/Login'} element={<Login/>}/>
   </Routes>
  );
}

export default App;
