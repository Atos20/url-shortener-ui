import React, { Component } from 'react';
import './App.css';
import { getUrls, sendUrls, deleteUrl} from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      reponse: '',
      error:''
    }
  }

  resolveDeleteRequest = async (id) => {
    const promise = await deleteUrl(id)
    this.setState({reponse: promise})
  }
  
  deleteCard = (event) =>{
    console.log('delete')
    const id = event.target.id
    this.resolveDeleteRequest(id)
    const stateCopy = [...this.state.urls]
    const removedElement = stateCopy.find(url => {
      return url.id === +event.target.id
    });
    const index = stateCopy.indexOf(removedElement)
      if (index !== -1) {
      stateCopy.splice(index, 1);
      this.setState({urls: stateCopy});
    }
  } 

  sendUrl = async(url) => {
    try{
      const newUrl = await sendUrls(url)
      this.setState({urls: [...this.state.urls, newUrl]})
    } catch(error){
      return error
    }
  }

  getAllUrls= async() => {
    try{
      const allUrls = await getUrls();
      // this.setState({ urls: [...this.state.urls, ...allUrls.urls]})
      this.setState({ urls: allUrls.urls})
    } catch(error){
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
          urls={this.state.urls}
          deleteCard= {this.deleteCard}
          />
      </main>
    );
  }
}

export default App;
