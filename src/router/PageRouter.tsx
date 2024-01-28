
import Genre from '../pages/Genre'
import Home from '../pages/Home'
import {Route} from "wouter"

function PageRouter() {
  return (
    <>
    <Route path='/' component={Home}/>
    <Route path='/Genre' component={Genre}/>
    </>
  )
}

export default PageRouter