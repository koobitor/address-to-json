import Layout from '../components/Layout'
import dynamic from 'next/dynamic'
// import ReactJson from 'react-json-view'

class Index extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      input: 'album, year, US_peak_chart_post\r\nThe White Stripes, 1999, -\r\nDe Stijl, 2000, -\r\nWhite Blood Cells, 2001, 61',
      output: []
    }

    this.onKeyUp = this.onKeyUp.bind(this)
    this.csvToJson = this.csvToJson.bind(this)
  }

  onKeyUp = (e) => {
    this.setState({
      input: e.target.value
    })
    this.csvToJson()
  }

  csvToJson = () => {
    const input = this.state.input
    const csv = input.split(/\r|\n|↵/)
    const header = csv[0].split(',')
    const output = []
    csv.forEach((item, index) => {
      if(index > 0){
        let temp = item.trim()
        if(temp != ""){
          temp = temp.split(',')
          let result = {}
          header.forEach((head, key) => {
            result[head] = temp[key]
          })
          output.push(result)
        }
      }
    })
    this.setState({
      output: output
    })
  }

  render() {
    const ReactJson = dynamic(import('react-json-view'))
    return (
      <Layout title="Lorem">
        <div className="container">
          <div className="col input">
            <h2>Input</h2>
            <textarea onKeyUp={this.onKeyUp} rows="20">{this.state.input}</textarea>
            <button onClick={this.csvToJson}>Submit</button>
          </div>
          <div className="col output">
            <h2>Output</h2>
            <ReactJson src={this.state.output} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index