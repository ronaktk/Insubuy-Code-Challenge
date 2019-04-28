import React, { Component } from 'react'
import Select from './Select'
import './Form.css'

class Form extends Component {

  state = {
    newUser: {
      policy_max: ""
    },
    policy_max_options: [50,100,250,500]
  }

  handleInput = (e) => {
    this.setState({
      newUser: {
        policy_max: e.target.value
      }
    })
  }

  render() {
    return(
      <div className="form_wrapper">
        <div className="form_container">
          <div className="form_header">
            <img src="" alt="Insubuy logo" />
            <h3>Travel Insurance</h3>
          </div>
          <form>
            
            <div className="row clearfix">
              {/* Policy Maximum input field */}
                <Select
                  title={"Policy Maximum"}
                  name={"policy_max"}
                  options={this.state.policy_max_options}
                  value={this.state.newUser.policy_max}
                  placeholder={"Choose your policy maximum"}
                  handleChange={this.handleInput}
                />

                {/* Age input field */}
                <div className="col_half">
                  <label htmlFor="age">Age</label>
                  <div className="input_field">
                    <input 
                    type="number"
                    name="age"
                    placeholder="Choose your age"
                    />
                  </div>
                </div>
              </div>

              <div className="row clearfix">
                {/* Travel Dates input field */}
                <div className="col_half">
                  <label htmlFor="travel_dates">Travel Dates (mm/dd/yyyy)</label>
                  <div className="input_field">
                    <input 
                    type="text"
                    name="start_date"
                    placeholder="Start Date"
                    />
                    <input 
                    type="text"
                    name="end_date"
                    placeholder="End Date"
                    />
                  </div>
                </div>
                {/* Citizenship input field */}
                <div className="col_half">
                  <label htmlFor="citizenship">Citizenship</label>
                  <div className="input_field">
                    <input 
                    type="text"
                    name="citizenship"
                    placeholder="Choose your Country of Citizenship"
                    />
                  </div>
                </div>
              </div>

              <div className="row clearfix">
                {/* Mailing State input field */}
                <div className="col_half">
                  <label htmlFor="mailing_state">Mailing State</label>
                  <div className="input_field">
                    <input 
                    type="text"
                    name="mailing_state"
                    placeholder="Choose State"
                    />
                  </div>
                </div>
              </div>

              

          </form>
        </div>
      </div>
    )
  }
}

export default Form