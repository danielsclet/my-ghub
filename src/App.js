import React, { Component } from 'react'
import Axios from 'axios'

import Navbar from './components/navbar'
import List from './components/list'

import './App.css'

const Config = require('./config.json')

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      repos: [],
      forks: []
    }

    this.loadData()
  }

  loadData = async () => {
    const response = await Axios.all([
      Axios.get(`https://api.github.com/users/${Config.username}`),
      Axios.get(`https://api.github.com/users/${Config.username}/repos`)
    ])

    const [ responseUser, responseRepos ] = response

    this.setState({ user: responseUser.data, repos: responseRepos.data })
  }

  render() {
    const state = this.state
    let loader
    
    if (typeof state.user.name !== 'string') {
      loader = <div className="loading-page"><span className="loader"></span></div>
    } else {
      loader = <div className="loading-page loading-success"><span className="loader"></span></div>
    }

    return (
      <div className="App" style={{ backgroundImage: `url(${Config.background_image})` }}>
        {loader}

        <Navbar user={state.user} />
        
        <main className="site-body">
          <List title="Repositories." repos={state.repos} />
        </main>
      </div>
    );
  }
}

export default App;
