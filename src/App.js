import React, { Component } from 'react'
import Api from './services/api'

import './App.css'

import Navbar from './components/navbar'
import WorkList from './components/workList'

const Config = require('./config.json')

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      repos: []
    }

    this.loadData()
  }

  async loadData() {
    const responseUser = await Api.get(`/users/${Config.username}`)
    const responseRepos = await Api.get(`/users/${Config.username}/repos`)

    this.setState({ user: responseUser.data })
    this.setState({ repos: responseRepos.data })
  }

  render() {
    const state = this.state
    let loader
    
    if (typeof state.user.name !== 'string') {
      loader = <div className="loading-page"><span className="loader"></span></div>
    } else {
      loader = <div className="loading-page loading-success"><span className="loader"></span></div>
    }

    console.log(Config.background_image)

    return (
      <div className="App" style={{ backgroundImage: `url(${Config.background_image})` }}>
        {loader}

        <Navbar user={state.user} />
        
        <main className="site-body">
          <WorkList repos={state.repos} />
        </main>
      </div>
    );
  }
}

export default App;
