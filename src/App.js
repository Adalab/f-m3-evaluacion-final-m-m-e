import React from 'react';
import Home from './components/Home';
import CharacterDetails from './components/CharacterDetails';
import './stylesheets/App.scss';
import './components/CharacterList';
import { fetchData } from './services/FetchData';
import { Link, Route, Switch } from 'react-router-dom';
import gryff from './images/gryffindor.jpg';
import slyth from './images/slytherin.jpg';
import huff from './images/hufflepuff.jpg';
import raven from './images/ravenclaw.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: [],
      filterName: ''
    }
    this.getData = this.getData.bind(this);
    this.handleNameFilter = this.handleNameFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetchData()
      .then(data => {
        const newData = data.map((item, index) => {
          return {...item, id: index}
        });
        this.setState({characterData: newData})
      })
  }

  handleNameFilter(event) {
    const input = event.currentTarget.value;
    this.setState({filterName: input});
  }

  clearFilter() {
    this.setState({filterName: ''});
  }

  showHouse(character) {
    const house = character.house.toLowerCase();
    if (house === 'gryffindor') {
      return gryff
    } else if (house === 'slytherin') {
      return slyth
    } else if (house === 'hufflepuff') {
      return huff
    } else {
      return raven
    }
  }

  render() {
    const {characterData, filterName} = this.state;
    const {handleNameFilter, showHouse} = this;
    return (
      <div className="app">
        <header className="header">
          <nav className="menu">
            <ul className="menu-list">
              <Link className="menu-link" to="/">Home</Link>
            </ul>
          </nav>
        </header>
        <main className="main-content">
          <Switch>
            <Route 
              exact path="/" 
              render={() => (
                <Home 
                  characterData={characterData} 
                  filterName={filterName} 
                  handleNameFilter={handleNameFilter}
                  showHouse={showHouse}
                />
              )} 
            />
            <Route 
              path="/characterdetails/:id" 
              render={routerProps =>(
                <CharacterDetails 
                  match={routerProps.match}
                  characterData={characterData}
                  clearFilter={this.clearFilter}
                  showHouse={showHouse}
                />
            )}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
