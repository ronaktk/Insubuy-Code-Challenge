import React, { Component } from 'react'
import Select from '../Layout/Select'
import Button from '../Layout/Button'
import Input from '../Layout/Input'

import './Index.css'

class Form extends Component {

  state = {
    policy_max: '',
    age: '',
    start_date: new Date(),
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
    //form validation
    window.location = '/results'
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
                  label={"Policy Maximum"}
                  name={"policy_max"}
                  options={this.state.policy_max_options}
                  value={this.state.policy_max}
                  placeholder={"Choose your policy maximum"}
                  onChange={this.handleInput}
                  required={"true"}
                />

                {/* Age input field */}
                <Input 
                  type="text"
                  name="age"
                  label="Age"
                  value={this.state.age}
                  placeholder="Choose your age"
                  title="Age must be less than 100 or Enter a 4-digit year."
                  onKeyPress={this.onKeyPress}
                  onChange={this.handleInput}
                  required={"true"}
                  pattern="(^[1-9]$|^[1-9][0-9]$|^(100)$)|(^(19|20)\d{2}$)"
                />
              </div>

              <div className="row clearfix">
              
                {/* Travel Dates input field */}
                <div className="col_half">
                  <label htmlFor="travel_dates">Travel Dates (mm/dd/yyyy)</label>
                  <div className="input_field">
                    <Input
                     type="date"
                     placeholder="Start Date"
                     value={this.state.start_date}
                     onChange={this.handleInput}
                    />
                    <Input
                     type="date"
                     placeholder="End Date"
                     value={this.state.end_date}
                     onChange={this.handleInput}
                    />
                  </div>
                </div>

                {/* Citizenship input field */}
                <Input 
                  type="text"
                  label="Citizenship"
                  name="citizenship"
                  value={this.state.citizenship}
                  title="Should not contain numbers or special characters."
                  placeholder="Choose your Country of Citizenship"
                  onChange={this.handleInput}
                  required={"true"}
                  pattern="^[a-zA-Z ]*$"
                />
              </div>

              <div className="row clearfix">

                {/* Mailing State input field */}
                <Input 
                  type="text"
                  label="Mailing State"
                  name="mailing_state"
                  value={this.state.mailing_state}
                  placeholder="Choose State"
                  title="Should not contain numbers or special characters."
                  onChange={this.handleInput}
                  required={"true"}
                  pattern="^[a-zA-Z ]*$"
                />
              </div>

              {/* Get Quotes button */}
              <Button 
                type="submit"
                title={"Get Quotes"}
                className="get_quotes"
                
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