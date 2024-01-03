import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisableMode from './components/DisableMode';
import VolunteerMode from './components/VolunteerMode.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import Main from './components/Main';
import AddVolunteers from './components/AddVolunteers';
import EmptyPage from './components/EmptyPage.jsx';
import Profile from './components/Profile.jsx';
import Home from './components/Home.jsx';
import HomePage from './components/HomePage.jsx';
import Information from './components/Information.jsx';

function App() {
  // const { kakao } = window;
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route exact path="/volunteerinformation/:userid" >
          <Information/>
        </Route>
        
        <Route exact path="/volunteer/:userid" >
          <HomePage/>
        </Route>
        <Route exact path="/signup" >
          <SignUp/>
        </Route>
        <Route exact path="/disable/:userid" >
          <DisableMode/>
        </Route>
        {/* <Route exact path="/volunteers" >
          <VolunteerMode/>
        </Route> */}
        <Route exact path="/profile">
          <Profile authorized={false}/>
        </Route>
        <Route exact path="/addvolunteer/:userid" >
          <AddVolunteers/>
        </Route>
        <Route>
          <EmptyPage/>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}
export default App;
