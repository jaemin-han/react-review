import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router'
import User from './User'
import { getPeople } from '../xhr'

let Users = React.createClass({

  getInitialState: function() {
    return {
      users: []
    }
  },

  componentDidMount: function() {
    getPeople().then(results => {
      this.setState({
        users: results.data.results
      })
    })
  },

  render: function() {
    return (
      <div>
        <h3>Star Wars Characters:</h3>
      {/*Navigate to a different page (/other)*/}
        {/*<Link to="/other">Other</Link>*/}
        {this.state.users.map(user => {
          return <User name={user.name} key={user.name} />
        })}
      </div>
    )
  }
})

export default Users
