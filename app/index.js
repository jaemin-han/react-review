// Require React and ReactDom
// React -- Core of the react & React work with the DOM (building web application)
// Webpack will allows us to write our application code in a separate files and
// can require eachother and build

import React from 'react'
import ReactDOM from 'react-dom'

let Counter = React.createClass({

  getInitialState: function() {
    return {
      count: 0
    }
  },

  componentDidMount: function() {

    this.setState({
      count: this.props.start
    })

    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)

  },

  render: function() {
    return <div>Count: {this.state.count}</div>
  }

})

let App = React.createClass({
  render: function() {
    return <Counter start={5} />
  }
})

ReactDOM.render(<App />, document.getElementById('root'))


// NOTE 1 START
 // Terminal Command Line --> npm i -g http-server
 // http-server --> turns into a quick server
 // http://127.0.0.1:8080/
// END *************************************************


// NOTE 2 START
  // The syntax below is an example of creating react component without using JSX

  // var React = require('react')
  // var ReactDOM = require('react-dom')

  // var App = React.createClass({
  //   render: function() {
  //     return React.createElement('h1', {}, 'Hello World')
  //   }
  // })

  // Sends app component to mount point
  // ReactDOM.render(<App />, document.getElementById('root'))
// END *************************************************

