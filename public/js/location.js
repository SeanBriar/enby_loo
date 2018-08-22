class Location extends React.Component {
  render() {
    return (
      <div className='locationShow'>
        <div className='fullListBtnDiv'>
        <i className="material-icons seeFullListIcon" onClick={()=> this.props.toggleState('locationsListIsVisible', 'locationIsVisible')}>arrow_back</i>
        </div>

        <div className='indivLocation'>
          <p className='pShowName'>Name: <span className='showItem'>{this.props.location.name}</span></p>

          <p className='pShow'>Adress, City, State:<span className='showItem'> {this.props.location.address}, {this.props.location.city}, {this.props.location.state} </span></p>

          <p className='pShow'>Notes: <span className='showItem'>{this.props.location.directions} </span></p>

          <p className='pShow'>Cleanliness:
           {this.props.location.cleanliness > 3 ?
            <i class="material-icons blue-text darken-4 thumb">thumb_up</i>
          :
            <i class="material-icons red-text darken-4 thumb">thumb_down</i>
          }

          <span className='friendliness'>Friendliness:
          {this.props.location.staff_friendliness > 3 ?
           <i class="material-icons blue-text darken-4 thumb">thumb_up</i>
         :
           <i class="material-icons red-text darken-4 thumb">thumb_down</i>
         } </span>
          </p>

          <p className='pShow'>ADA Complacent: <span className='showItem'>{this.props.location.ada}</span></p>
        </div>


        {this.props.editLocationIsVisible ?
          <LocationsForm
            location={this.props.location}
            handleSubmit={this.props.handleSubmit}
            editLocationIsVisible={this.props.editLocationIsVisible}
            toggleState={this.props.toggleState}/>
            : '' }
      </div>
    )
  }
}
