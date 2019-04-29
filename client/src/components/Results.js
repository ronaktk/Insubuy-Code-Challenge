import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Quote from './Quote'
import Button from './Button';

const url = "http://localhost:8080/quotes/"

class Results extends Component {

  state = {
    quotes: [],
    toggle: false
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    axios.get(url)
    .then(res => {
      console.log(res.data)
      this.setState({
        quotes: res.data.quotes
      })
    })
    .catch(err => console.log(err))
  }

  toggleClass() {
    const currentState = this.state.toggle
    this.setState({
      toggle: !currentState
    })
  }

  render() {
    return(
      <Fragment>
        <div className="header">
          <Button 
          onClick={this.toggleClass.bind(this)}
          title="Toggle View"
          />
        </div>
        
          <div className={this.state.toggle ? "container" : "grid"}>
          {
            this.state.quotes.map(quote => (
              <Quote 
              key={quote.id}
              price={quote.price}
              name={quote.name}
              description={quote.description}
              type={quote.type}
              section={quote.section}
              bestSellers={quote.bestSellers}
              />
            ))
          }
        </div>
      </Fragment>
    )
  }
}

export default Results