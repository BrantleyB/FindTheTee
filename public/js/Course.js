class Course extends React.Component {
  render () {
    return (
      <div>
        <div className='tile is-ancestor'>
          <div className='tileimg'>
            <div className='img'>
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
      <td onClick={
        () => {
          this.props.toggleState('CourseVisible', 'editFormVisible');
        }}
      >
          <button className='button is-warning is-small'>Edit</button>
      </td>
      <td>
          <button
            className='button is-danger is-small'
            onClick={
              () => {this.props.deleteCourse(this.props.course, this.props.index); this.props.toggleState('listIsVisible', 'CourseVisible')}}>Delete</button>
      </td>
      </div>
    )
  }
}
