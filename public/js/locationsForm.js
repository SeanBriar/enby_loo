class LocationsForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: '',
      name: '',
      address: '',
      city: '',
      state: '',
      directions: '',
      ada: '',
      cleanliness: '',
      staff_friendliness: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if(this.props.location){
      this.setState({
        id: this.props.location.id,
        name: this.props.location.name,
        address: this.props.location.address,
        city: this.props.location.city,
        state: this.props.location.state,
        directions: this.props.location.directions,
        ada: this.props.location.ada,
        cleanliness: this.props.location.cleanliness,
        staff_friendliness: this.props.location.staff_friendliness
      })
    }
  }

  handleChange (event) {
    this.setState(
      {[event.target.id]: event.target.value}
    )
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
            <input
              id="name"
              type="text"
              className="validate active"
              onChange={this.handleChange}
              value={this.state.name}/>
            <label className='active' for="name">Name</label>
          </div>
          <div className="input-field col s6">
            <input
              id="address"
              type="text"
              className="validate active"
              onChange={this.handleChange}
              value={this.state.address} />
            <label className='active' for="address">Address</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input
              id="city"
              type="text"
              className="validate active"
              onChange={this.handleChange}
              value={this.state.city} />
            <label className='active' for="city">City</label>
          </div>
          <div className="input-field col s6">
            <input
              id="state"
              type="text"
              className="validate active"
              onChange={this.handleChange}
              value={this.state.state}/>
            <label className='active' for="state"> State (i.e. CA)</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                id="directions"
                type="text"
                className="validate active"
                onChange={this.handleChange}
                value={this.state.directions} />
              <label className='active' for="directions">Directions</label>
            </div>
          </div>


        <div className="row">
          <div className="input-field col s4">
            <input
              id="cleanliness"
              type="text"
              className="validate active"
              onChange={this.handleChange}
              value={this.state.cleanliness}/>
            <label className='active' for="cleanliness"> Cleanliness (1-5)</label>
          </div>
       <div className="input-field col s4">
         <input
          id="staff_friendliness"
          type="text"
          className="validate active"
          onChange={this.handleChange}
          value={this.state.staff_friendliness} />
         <label className='active' for="staff_friendliness">Friendliness (1-5)</label>
       </div>
       <div className="input-field col s4">
         <input
           id="ada"
           className="validate active"
           type='text'
           onChange={this.handleChange}
           value={this.state.ada} />
         <label className='active' for="ada">ADA (T/F)</label>
       </div>
     </div>
     <div>
      <input type='submit' value='Submit' />
    </div>
   </form>
     <div className='cancelBtn'>
     {this.props.editLocationIsVisible ?
       <button onClick={()=>this.props.toggleState('locationsListIsVisible', 'editLocationIsVisible', 'addLocationIsVisible')}>Cancel</button>
       :
       <button className='cancel' onClick={()=> this.props.toggleState('locationsListIsVisible', 'addLocationIsVisible')}>Cancel</button>
      }
     </div>
   </div>
    )
  }
}
