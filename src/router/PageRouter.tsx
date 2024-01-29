
import Heading from '../components/Heading'
import Nav from '../components/Nav'
import Genre from '../pages/Genre'
import Home from '../pages/Home'
import Currloc from "../components/Currloc"
import { Link, Route, Switch } from "wouter"
import Title from '../components/Title'
import Footer from '../components/Footer'

function PageRouter() {
  return (
    <>
      <Heading />
      <Nav />
      <Title />
      <Currloc />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/Genre' component={Genre} />
        <Route >
          page not found 
          <Link href='/'>HomePage</Link>
        </Route>
      </Switch>
      <Footer/>
    </>
  )
}

export default PageRouter