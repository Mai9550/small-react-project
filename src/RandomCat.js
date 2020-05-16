class RandomCat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.fetchRandomCatImg = this.fetchRandomCatImg.bind(this)
  }

  componentDidMount() {
    this.fetchRandomCatImg()
  }

  fetchRandomCatImg() {
    fetch("https://aws.random.cat/meow")
      .then(response => response.json())
      .then(data => {
        this.setState({
          error: null,
          ready: true,
          src: data.file
        })
      })
      .catch(error => this.setState({ error }))
  }

  render() {
    if (this.state.error) return <p>Oops, something went wrong!</p>
    if (!this.state.ready) return <p>Loading...</p>
    return <img src={this.state.src} alt="random cat photo" />
  }
}
export default RandomCat;