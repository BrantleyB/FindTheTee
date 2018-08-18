class Courses extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      listIsVisible: true,
      addIsVisible: false,
      CourseVisible: false,
      editVisible: false,
      courses: [],
      course: {}
    }
    this.deleteCourse = this.deleteCourse.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.getCourses = this.getCourses.bind(this)
    this.getCourse = this.getCourse.bind(this)
    this.toggleState = this.toggleState.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
  }

  componentDidMount() {
    this.getCourses();
  }

  handleCreate (course) {
    console.log([course, ...this.state.courses])
    this.setState({courses: [course, ...this.state.courses]})
  }

  handleCreateSubmit (course) {
    fetch('/courses', {
      body: JSON.stringify(course),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdcourse => {
      return createdcourse.json()
    })
    .then(jsonedcourse => {
      this.handleCreate(jsonedcourse)
      this.toggleState('addIsVisible', 'listIsVisible')
    })
    .catch(error => console.log(error))
  }

  deleteCourse(course,index){
    fetch('/courses/' + course.id,
  {
    method: 'DELETE'
  })
  .then(data => {
    this.setState({
      courses: [
        ...this.state.courses.slice(0,index),
        ...this.state.courses.slice(index + 1)
      ]
    })
  })
  }

  handleUpdateSubmit (course) {
    fetch('/courses/' + course.id, {
      body: JSON.stringify(course),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedcourse => {
        return updatedcourse.json();
      })
      .then(jsonedcourse => {
        this.getcourses();
        this.toggleState('listIsVisible', 'courseVisible');
      })
      .catch(error => console.log(error));
  }

  getCourses(){
    fetch('/courses')
      .then(response => response.json())
      .then(JSONdata => {
        this.setState({
          courses: JSONdata
        })
      }).catch(error => console.log(error))
  }

  getCourse( course ){
    this.setState({course:course})
  }

  toggleState(st1, st2){
    this.setState({
      [st1]: !this.state[st1],
      [st2]: !this.state[st2]
    })
  }

    render () {
      return (
        <div className='courses-column'>
          <h2> Courses </h2>
          <button
            className='button-add-item'
            onClick={() => this.toggleState('addIsVisible' , 'listIsVisible')}
            >Add a course</button>

          {this.state.listIsVisible
            ? <coursesList
            toggleState={this.toggleState}
            courses={this.state.courses}
            getcourse={this.getcourse}
            deletecourse={this.deletecourse}
            /> : ''}

          {this.state.addIsVisible
            ? <coursesForm
            toggleState={this.toggleState}
            handleCreate={this.handleCreate}
            handleSubmit={this.handleCreateSubmit}
            /> : ''}

          {this.state.courseVisible
            ? <course
            toggleState={this.toggleState}
            course={this.state.course}
            handleSubmit={this.handleUpdateSubmit}
            /> : ''}

      </div>
      )
    }
  }
