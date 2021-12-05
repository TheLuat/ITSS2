import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import LandingPage from './views/home/Home';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const GroupKPI = React.lazy(() => import('./views/pages/KPI/GroupKPI'));
const EmployeeKPI = React.lazy(() => import('./views/pages/KPI/EmployeeKPI'));
const Employee = React.lazy(() => import('./views/pages/Nhan_vien/Employee'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/group-kpi" name="Group KPI" render={props => <GroupKPI {...props}/>} />
              <Route exact path="/employee-kpi" name="Employee KPI" render={props => <EmployeeKPI {...props}/>} />
              <Route exact path="/employee" name="Employee" render={props => <Employee {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/home" name="Home" render={props => <TheLayout {...props}/>} />
              <Route exact path='/' component={LandingPage}/>
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
