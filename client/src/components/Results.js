import React, { Component } from 'react'
import axios from 'axios'

const url = "http://localhost:8080/quotes/"

class Results extends Component {

  componentDidMount() {
    this.getData()
  }

  getData() {
    axios.get(url)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
        Results Component
      </div>
    )
  }
}

export default Results