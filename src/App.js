import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Service from './pages/Service'
import ErrorPage from './pages/404';
// import Products from './Products/Products';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/products/:courseName' component={Products}/>
        <Route exact path='/service' component={Service}/>
        <Route component={ErrorPage}/>

      </Switch>



      {/* <TeamSection/>
      <Navbar/>
      <HeroMain/>
      <Footer/> */}
    </div>
  );
}

export default App;
