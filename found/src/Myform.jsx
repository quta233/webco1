import React from 'react';

class Myform extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        lostitem:
          { name: '', time: '', location: '', contact: '', desc: '' }
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        lostitem: {
          ...this.state.lostitem,
          [name]: value}
      });
    }
  
    handleSubmit(event) {
      alert("You success report the lost item! \n" + "Item name: " + this.state.lostitem.name +
      "\n" + "Found location: " + this.state.lostitem.location + "\n" +
      "Found time: " + this.state.lostitem.time + "\n" +
      "Contact information: " + this.state.lostitem.contact + "\n" +
      "Detailed description: " + this.state.lostitem.desc);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit} className="mix-box">
          <div>
            <label>
              Item Name:<br/>
              <input type="text" name="name" value={this.state.lostitem.name} onChange={this.handleChange}/>
            </label><br/>
            <label>
              location:<br/>
              <input type="text" name="location" value={this.state.lostitem.location} onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <label>
              Found time:<br/>
              <input type="text" name="time" value={this.state.lostitem.time} onChange={this.handleChange}/>
            </label><br/>
            <label>
              Email/Contact:<br/>
              <input type="text" name="contact" value={this.state.lostitem.contact} onChange={this.handleChange}/>
            </label>
          </div>
          <br />
          <label>
            Detailed description: <br />
            <textarea name="desc" value={this.state.lostitem.desc} onChange={this.handleChange} />
          </label><br/>
          <input className="button" type="submit" value="Submit" />
        </form>
      );
    }
  }
  

export default Myform;
  
  