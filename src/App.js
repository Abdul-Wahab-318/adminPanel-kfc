
import './App.css';
import Chart from './components/chart/Chart';
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import Table from './components/table/Table';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import CreateJob from './components/createProduct/CreateProduct';
import UserProfile from './components/userProfile/UserProfile';

function App() {
  return (

      <Router>
      <div className="App">
        <div className="header-component">
          <Header/>
        </div>
        <Switch>
          
          <Route exact path="/">
            <div className="page-content">
              <div className="container-fluid">
                <div className="row">
                  <SideBar/>
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <Chart />
                    <Table/>
                  </main>
                </div>
              </div>
            </div>
          </Route>

          <Route exact path="/createProduct">
            <CreateJob/>
          </Route>

          <Route exact path="/user/profile/:slug">
            <UserProfile/>
          </Route>


        </Switch>
 

 

 

    
      </div>
      </Router>
  )
}

export default App;
