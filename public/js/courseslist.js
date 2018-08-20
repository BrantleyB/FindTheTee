class CoursesList extends React.Component {
  render() {
    return (
      <table>
        <tbody>
        {this.props.courses.map((course,index)=>{
          return (
          <tr>
          <td onClick={
            () => {
              this.props.toggleState('listIsVisible', 'CourseVisible'); this.props.getCourse(course)
            }}
          >
            <img src={course.image} alt={course.name} />
          </td>
          <td onClick={
            () => {
              this.props.toggleState('listIsVisible', 'CourseVisible'); this.props.getCourse(course)
            }}
          >
            <h3> {course.name} </h3>
            <h4> {course.location} </h4>
            <h4> Difficulty: {course.difficulty} </h4>
          </td>
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
          </tr>
        )
        })}
        </tbody>
      </table>
    )
  }
}
