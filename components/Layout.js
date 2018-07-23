import Head from 'next/head'
import '../styles/style.scss'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        {this.props.children}
      </div>
    )
  }
}

export default Layout