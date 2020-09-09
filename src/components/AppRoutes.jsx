import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Public from "./Routes/Public"
import HomePage from "./Inicio/HomePage"
//import Login from "./Layouts/Login"
import Navbar from "./Inicio/Navbar"
import Footer from "./Inicio/Footer"
import UserList from "./Usuario/UserList"

const AppRoutes = () => (
    <Router>
        <Navbar />
        <div className="container">
            <Public path="/" exact component={HomePage} />
            <Public path="/Usuarios" exact component={UserList} />
            {/* <Public path="/login" component={Login} />  */}
        </div>
        <Footer />
    </Router>
)

export default AppRoutes;