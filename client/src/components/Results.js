import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Quote from './Quote'
import Button from './Button'
import Select from './Select'

const url = "http://localhost:8080/quotes/"

let res = []

class Results extends Component {

  state = {
    quotes: [],
    all: [],
    policy_max: '',
    section: '',
    type: '',
    toggle: false,
    sortByPrice: 'desc',
    sortByName: 'asc',
    bestSellers: false,
    policy_max_options: [50,100,250,500],
    section_options: ['Travel Medical','International Travel Medical','Student Medical','J1 Medical'],
    type_options: ['Comprehensive','Fixed']
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    axios.get(url)
    .then(res => {
      console.log(res.data)
      this.setState({
        quotes: res.data.quotes,
        all: res.data.quotes
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

  sortByPrice() {
    if(this.state.sortByPrice === 'desc') {
      res = this.state.quotes.sort((a,b) => b.price - a.price)
      this.setState({
        quotes: res,
        sortByPrice: 'asc'
      })
    } else {
      res = this.state.quotes.sort((b, a) => b.price - a.price)
      this.setState({
        quotes: res,
        sortByPrice: 'desc'
      })
    }
  }

  showAll() {
    this.setState({
      quotes: this.state.all,
      policy_max: '',
      type: '',
      section: ''
    })
  }

  sortByName() {
    if(this.state.sortByName === 'asc') {
      res = this.state.quotes.sort((a,b) => a.name.localeCompare(b.name))
      this.setState({
        quotes: res,
        sortByName: 'desc'
      })
    } else {
      res = this.state.quotes.sort((a, b) => b.name.localeCompare(a.name))
      this.setState({
        quotes: res,
        sortByName: 'asc'
      })
    }
  }

  findBestSellers() {
    res = this.state.quotes.filter(quote => quote.bestSellers)
    this.setState({
      quotes: res
    })
  }

  filterByPolicy(e) {
    res = this.state.all.sort((b, a) => b.price - a.price)
    res = this.state.all.filter(quote => quote.price < e.target.value)
    this.setState({
      quotes: res,
      policy_max: e.target.value
    })
  }

  filterBySection(e) {
    res = this.state.all.filter(quote => quote.section === e.target.value)
    this.setState({
      quotes: res,
      section: e.target.value
    })
  }

  filterByType(e) {
    res = this.state.all.filter(quote => quote.type === e.target.value)
    this.setState({
      quotes: res,
      type: e.target.value
    })
  }
  

  render() {
    return(
      <Fragment>
        <div className="header">
          <Button 
          onClick={this.sortByPrice.bind(this)}
          title="Sort by Price"
          />

          <Button 
          onClick={this.sortByName.bind(this)}
          title="Sort by Name"
          />

          <Select 
            name={"policy_max"}
            options={this.state.policy_max_options}
            value={this.state.policy_max}
            placeholder={"Filter by Policy"}
            onChange={this.filterByPolicy.bind(this)}
          />

          <Select 
            name={"type"}
            options={this.state.type_options}
            value={this.state.type}
            placeholder={"Filter by Type"}
            onChange={this.filterByType.bind(this)}
          />

          <Select 
            name={"section"}
            options={this.state.section_options}
            value={this.state.section}
            placeholder={"Filter by Section"}
            onChange={this.filterBySection.bind(this)}
          />

          <Button 
          onClick={this.findBestSellers.bind(this)}
          title="Best Sellers"
          />

          <Button 
          onClick={this.showAll.bind(this)}
          title="Show All"
          />
          
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