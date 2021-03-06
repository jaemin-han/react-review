import React from 'react'
import { getPerson } from '../xhr'

let UserProfile = React.createClass({

  getInitialState: function() {
    return {
      name: null,
      eyeColor: null,
      height: null
    }
  },

  componentDidMount: function() {
    getPerson(this.props.params.id).then(results => {
      console.log(results)
      this.setState({
        name: results.data.name,
        eyeColor: results.data.eye_color,
        height: results.data.height,
        gender: results.data.gender,
        hair_color: results.data.hair_color

      })
    })
  },

  render: function() {
    return (
      <div>
        <h3>User Profile: {this.state.name}</h3>
        <div>Eye Color: {this.state.eyeColor}</div>
        <div>Height: {this.state.height}cm</div>
        <div>Gender: {this.state.gender}</div>
        <div>Hair Color: {this.state.hair_color}</div>
      </div>
    )
  }

})

export default UserProfile
