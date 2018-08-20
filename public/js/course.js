class Course extends React.Component {
  render () {
    return (
      <div>
        <div className='tile is-ancestor'>
          <div className='tile is-2'>
            <div>
              <img src={this.props.course.image}
               alt={this.props.course.name} />
            </div>
          </div>

          <div className='tile is-2'></div>
          <div className='tile'>
            <div>
              <h3 className='tile is-child box'><span>Course Name: </span>
                  {this.props.course.name} </h3>

              <p className='tile is-child box'><span>Location: </span>
                  {this.props.course.location} </p>

              <p className='tile is-child box'><span>Description: </span>
                  {this.props.course.description}</p>

              <p className='tile is-child box'><span>Difficulty: </span>
                  {this.props.course.difficulty}</p>
            </div>
            <div className='tile'>
            </div>
          <div className='tile'>
            <button className='button-fulllist'
              onClick={() =>
              this.props.toggleState('listIsVisible', 'CourseVisible')}
            >See all Courses</button>
          </div>
          </div>
        </div>
        <CoursesForm
          course={this.props.course}
          handleSubmit={this.props.handleSubmit}
          toggleState={this.props.toggleState}
      />
      <td onClick={
        () => {
          this.props.toggleState('listIsVisible', 'CourseVisible'); this.props.getCourse(course)
        }}
      >
          <button className='button is-warning is-small'>Edit</button>
      </td>
      <td>
          <button
            className='button is-danger is-small'
            onClick={() => this.props.deleteCourse(course, index)}>Delete</button>
      </td>
      </div>
    )
  }
}
