class App extends React.Component {
  render() {
    return (
      <div className='section'>
        <h1 className='title'>Find the Tee</h1>
        <h2></h2>
        <h2 className='title'>For all your golf course searching needs </h2>
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
