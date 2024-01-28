
import Heading from '../components/Heading'
import Nav from '../components/Nav'
import Genre from '../pages/Genre'
import Home from '../pages/Home'
import Currloc from "../components/Currloc"
import {Route} from "wouter"

function PageRouter() {
  return (
    <>
    <Heading/>
    <Nav/>
    <Currloc/>
    <Route path='/' component={Home}/>
    <Route path='/Genre' component={Genre}/>
    </>
  )
}

export default PageRouter