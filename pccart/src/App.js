import React, { Component } from 'react';
import Table from './Table';
import DisplayCart from './Cart'
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Mandatory from './Home.js';
import Layout from './Layout';
import Navigation from './Navigation';
import ControlledCarousel from './Caro';
import Idea from './idea';
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
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <React.Fragment className="App">
        <Navigation />

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
            <Route path="/find/processors"><Table index={0} style={{ marginLeft: '10vh', marginRight: '10vh' }} /></Route>
            <Route path="/find/gpu"><Table index={1} style={{ marginLeft: '10vh', marginRight: '10vh' }} /></Route>
            <Route path="/find/processors"><Table index={2} style={{ marginLeft: '10vh', marginRight: '10vh' }} /></Route>
            <Route path="/show/mycart"><DisplayCart /></Route>
          </BrowserRouter>

        </div>
      </React.Fragment>
    );
  }
}
export default App;