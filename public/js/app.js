class App extends React.Component {
  render() {
    return (
      <div className='section'>
        <h1 className='title'>Find the Tee</h1>
        <div className='columns'>
          <Things />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
