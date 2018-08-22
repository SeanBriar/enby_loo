class LocationsList extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      search: ''
    }
    this.updateSearch = this.updateSearch.bind(this)
  }

  updateSearch(event){
    this.setState({
      search: event.target.value
    })
  }

  render() {
    let filteredLocations = this.props.locations.filter(
      (location)=> {
        return location.city.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        location.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    )
    return (
      <div className='locationBox'>
        <div className="searchBar">
         <div className="input-field col s10 searchDiv">
              <input
                id="search"
                type="text"
                className="validate"
                onChange={this.updateSearch} />
                <label for="search"> Search</label>
          </div>
        </div>
        <div className='locationsTable'>
        <table>
          <tbody>
          {filteredLocations.map((location, index)=> {
            return (
              <tr>
              <td className='locationName' onClick={()=> { this.props.getLocation(location); this.props.toggleState('locationsListIsVisible', 'locationIsVisible')}}>
              {location.name}
              </td>
              <td>
              {location.address}, {location.city}, {location.state}
              </td>
              <td>
                <div className='deleteBtn'>
                  <i onClick={()=> this.props.deleteLocation(location, index)} class="material-icons trash">delete_forever</i>
                </div>
              </td>
              <td>
                <div className='editBtn'>
                <i className="material-icons" onClick={() => {this.props.getLocation(location); this.props.toggleState('locationIsVisible', 'locationsListIsVisible', 'editLocationIsVisible')}}>edit</i>
                </div>
              </td>
              </tr>
            )
          })}
         </tbody>
        </table>
        </div>
      </div>
    )
  }
}
