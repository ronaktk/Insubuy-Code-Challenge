import React, { Component } from 'react'
import Select from './Select'
import Button from './Button'
import Input from './Input'

import './Form.css'

class Form extends Component {

  state = {
    policy_max: '',
    age: '',
    start_date: '',
    end_date: '',
    citizenship: '',
    mailing_state: ''
    ,
    policy_max_options: [50,100,250,500]
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleReset = (e) => {
    e.preventDefault()
    this.setState({
      policy_max: '',
      age: '',
      start_date: '',
      end_date: '',
      citizenship: '',
      mailing_state: ''
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() { 
    return(
      <div className="form_wrapper">
        <div className="form_container">
          <div className="form_header">
            <img src="" alt="Insubuy logo" />
            <h3>Travel Insurance</h3>
          </div>
          <form onSubmit={this.handleSubmit}>
            
            <div className="row clearfix">
              {/* Policy Maximum input field */}
                <Select
                  title={"Policy Maximum"}
                  name={"policy_max"}
                  options={this.state.policy_max_options}
                  value={this.state.policy_max}
                  placeholder={"Choose your policy maximum"}
                  onChange={this.handleInput}
                />

                {/* Age input field */}
                <Input 
                  type="text"
                  name="age"
                  value={this.state.age}
                  placeholder="Choose your age"
                  title="Age"
                  onChange={this.handleInput}
                />
              </div>

              <div className="row clearfix">
                {/* Travel Dates input field */}
                <div className="col_half">
                  <label htmlFor="travel_dates">Travel Dates (mm/dd/yyyy)</label>
                  <div className="input_field">
      
                  </div>
                </div>
                {/* Citizenship input field */}
                <Input 
                  type="text"
                  name="citizenship"
                  value={this.state.citizenship}
                  placeholder="Choose your Country of Citizenship"
                  title="Enter a valid input"
                  onChange={this.handleInput}
                />
              </div>

              <div className="row clearfix">
                {/* Mailing State input field */}
                <Input 
                  type="text"
                  name="mailing_state"
                  value={this.state.mailing_state}
                  placeholder="Choose State"
                  title="Mailing State"
                  onChange={this.handleInput}
                />
              </div>

              {/* Get Quotes button */}
              <Button 
                type="submit"
                title={"Get Quotes"}
                className="get_quotes"
                onClick={this.handleSubmit}
              />

              {/* Reset button */}
              <Button
                title={"Reset Form"}
                className="reset"
                onClick={this.handleReset}
              />

          </form>
        </div>
      </div>
    )
  }
}

export default Form