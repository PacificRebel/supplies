import React, { Component } from 'react';

class SupplyList extends Component{
  constructor(props) {
    super(props);
    this.state = {value: '', supplies: []};
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.state.notes.push(this.state.value)
    this.setState({supplies: this.state.supplies});
    event.preventDefault();
  }

  handleSubmit(event) {
    this.state.supplies.push(this.state.value)
    this.setState({supplies: this.state.supplies});
    event.preventDefault();
  }

  render(){
    return(
      <div className="SupplyList">
      <form onSubmit={this.handleSubmit}>
      <label>
        Add supply: <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add supply to list" />
        </form>
        {this.state.supplies.map( (supply, index) => {
          return (
            <p key={index}>{supply}</p>
          )
        })}
        </div>
    )
  }
}

export default SupplyList
