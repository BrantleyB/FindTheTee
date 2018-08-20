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
              this.props.toggleState('listIsVisible', 'CourseVisible'); this.props.getCourse(course, index)
            }}
          >
            <img src={course.image} alt={course.name} />
          </td>
          <td onClick={
            () => {
              this.props.toggleState('listIsVisible', 'CourseVisible'); this.props.getCourse(course, index)
            }}
          >
            <h3> {course.name} </h3>
            <h4> {course.location} </h4>
            <h4> Difficulty: {course.difficulty} </h4>
          </td>
          </tr>
        )
        })}
        </tbody>
      </table>
    )
  }
}
