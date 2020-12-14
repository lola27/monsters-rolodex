import React, { Component }from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
      <div className="App">
        <SearchBox placeholder='search monster' handleChange={e => this.setState({searchField: e.target.value})}></SearchBox>
        <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
