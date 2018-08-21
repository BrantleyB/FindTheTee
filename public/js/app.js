class App extends React.Component {
  render() {
    return (
      <div className='section'>
      <div className='header'>
        <h1 className='title'>Find the Tee</h1>
        <h2></h2>
        <h2 className='title'> Find the Perfect Course for You! </h2>
        </div>
        <div className='columns'>
          <Courses />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
