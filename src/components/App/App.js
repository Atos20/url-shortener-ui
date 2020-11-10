import React, { Component } from 'react';
import './App.css';
import { getUrls, sendUrls} from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      savedUrls: []
    }
  }
  
  sendUrl = async(url) => {
    console.log(url)
    try{
      const newUrl = await sendUrls(url)
      this.setState({savedUrls: [...this.state.savedUrls, newUrl]})
      console.log(newUrl)
      this.getAllUrls()
    } catch(error){
      console.log(error)
      return error
    }

  }

  getAllUrls= async() => {
    try{
      const allUrls = await getUrls();
      console.log(allUrls.urls)
      this.setState({ urls: [...this.state.urls, ...allUrls.urls]})
    } catch(error){
      console.log(error)
      return error
    }

  }

  componentDidMount= () => {
    this.getAllUrls()
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm 
            sendUrl={this.sendUrl}
          />
        </header>

        <UrlContainer 
          urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
