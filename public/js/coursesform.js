class CoursesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      location: '',
      description: '',
      difficulty: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if(this.props.course) {
      this.setState({
        name: this.props.course.name,
        image: this.props.course.image,
        location: this.props.course.location,
        description: this.props.course.description,
        difficulty: this.props.course.difficulty,
        id: this.props.course.id
      })
    }
  }
  handleChange (event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit (event) {
    event.preventDefault();
    if (this.props.editFormVisible == true){
      this.props.handleUpdateSubmit(this.state)
      this.props.toggleState('listIsVisible', 'editFormVisible')
    } else {
      this.props.handleSubmit(this.state);
    }
  }
  render () {
    return (
      <div className='field'>
        <form onSubmit={this.handleSubmit}>
          <label className='label' for='name'>Name</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='name'
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>

          <label className='label' for='image'>Image</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='image'
              onChange={this.handleChange}
              value={this.state.image}
            />

          </div>

          <label className='label' for='location'>Location</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='location'
              onChange={this.handleChange}
              value={this.state.location}
            />
          </div>

          <label className='label 'for='description'>Description</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='description'
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>

          <label className='label 'for='difficulty'>Difficulty</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='difficulty'
              onChange={this.handleChange}
              value={this.state.difficulty}
            />
          </div>

          <div className='control'>
            <input className='button-submit' type='submit' />
          </div>
        </form>
        <button className="button-nevermind" onClick={() => this.props.toggleState('listIsVisible', 'editFormVisible')}>Nevermind</button>
      </div>
    )
  }
}
