import React from 'react'
import {BrowserRouter , Route ,Routes} from "react-router-dom"
import Home from "./component/Home"
import CreatePage from './component/CreatePage'
import Nav from "./component/Nav"
import Edit from "./component/Edit"
import Detail from "./component/Detail"

function App() {

return(
  <div className='App'>
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
    <Route path="/employe" exact element={<Home/>}></Route>
    <Route path="/ajout"  element={<CreatePage/>} />
    <Route path="/edit/:id"  element={<Edit/>} />
    <Route path="/detail/:id"  element={<Detail/>} />
    </Routes>
</BrowserRouter></div>
)
}
  export default  App;