import {Routes, Route} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Layout from "./Layout";
import ProtectedRoutes from "./ProtectedRoutes";
import '../Style/app.css'
import View from "./View";
import About from "./About";




function App () {
  return (
   <Routes>
       <Route path={'/'} element={<Layout/>}>
           <Route path={'/Home'} element={
               <ProtectedRoutes>
                   <Home/>
               </ProtectedRoutes>
           }/>
           <Route path={'/Register'} element={<Register/>}/>
           <Route path={'/addContact'} element ={
               <ProtectedRoutes>
                   <addContact/>
               </ProtectedRoutes>
           }/>
           <Route path={'/update/:id'} element ={
               <ProtectedRoutes>
                   <addContact/>
               </ProtectedRoutes>
           }/>
           <Route path={'/view/:id'} element ={
               <ProtectedRoutes>
                   <View/>
               </ProtectedRoutes>
           }/>
           <Route path={'/Login'} element={<Login/>}/>
           <Route path={'/about'} element ={<About/>}/>
       </Route>
   </Routes>
  );
}

export default App;
