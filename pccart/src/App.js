import React, { Component } from 'react';
import Table from './Components/Tables/Table';
import LoginForm from './Components/Forms/Login.js';
// import DisplayCart from './Cart'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css';
import Mandatory from './Components/Home/Home.js';
import Layout from './Components/Layout/Layout.js';
import Navigation from './Components/NavigationBar/Navigation';
import ControlledCarousel from './Components/Carousel/Caro';
import Idea from './Components/Idea/idea';
import SignUp from './Components/Signup/Signup.js';
import DisplayCart from './Components/Cart/Cart.js';
import FooterPage from './Components/Footer/Footer';
class App extends Component {

  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err))
  }

  callBackendAPI = async () => {
    const response = await fetch('192.168.0.105:5000/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };


  render() {
    return (
      <div>
        <React.Fragment className="App" onUpdate={this.callBackendAPI}>
          <Navigation />
          {/* <p style={{ color: `white` }}>Welcome {localStorage.getItem('curr_user')}</p> */}
          <div className="ml-0 pl-0">
            <Mandatory />
            <BrowserRouter>
              <Route exact path="/" >
                <ControlledCarousel />
                <Layout >
                  <h2 style={{ marginTop: '10vh', textAlign: `center`, color: `#fff`, fontWeight: `bold` }}>Our Ideology</h2>
                  <Idea style={{ color: `#fff`, fontSize: `2vh` }} />
                </Layout>
              </Route>

              <Route path="/login"><LoginForm object={this} /></Route>
              <Route path="/cart"><DisplayCart /></Route>
              <Route path="/signup"><SignUp /></Route>
              <Route path="/find/processors"><Table index={0} style={{ marginLeft: '10vh', marginRight: '10vh' }} /></Route>
              <Route path="/find/gpu"><Table index={1} style={{ marginLeft: '10vh', marginRight: '10vh' }} /></Route>
              <Route path="/find/keyboards"><Table index={2} style={{ marginLeft: '10vh', marginRight: '10vh' }} /></Route>
              <Route path="/show/mycart"><DisplayCart /></Route>
            </BrowserRouter>

          </div>
        </React.Fragment>
        <div style={{ marginTop: '20px' }}>
          <BrowserRouter>
            <Switch>
              <Route path="/find"></Route>
              <Route><FooterPage /></Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
export default App;