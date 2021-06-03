import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import DogListComponent from '../components/dogListComponent.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newDogName: "",
      newDogDescription: "",
      dogsList: []
    }
    this.getDogs = this.getDogs.bind(this);
    this.addDog = this.addDog.bind(this);
  }

  onChangeHandler = (e) => {
    var value = e.target.value;
    var name = e.target.name;

    if ( name === 'name' ) {
      this.setState({
        newDogName: value
      });
      console.log(`name ${value} added!`);
    } if ( name === 'description' ) {
      this.setState({
        newDogDescription: value
      });
      console.log(`description ${value} added!`);
    }
    console.log("Input name is:", name);
  };

  componentDidMount() {
    this.getDogs();
  }

  addDog() {
    let data = {
      name: this.state.newDogName,
      description: this.state.newDogDescription
    }
    axios.post('/api/dogs', data).then((res) => {
      console.log("CLICKED!")
      console.log(res.data);
      this.getDogs();
    });
  }

  getDogs() {
    axios.get('/api/dogs')
      .then(({ data }) => {
        console.log('DAtA is here??', data);
        this.setState({
          dogsList: data
        });
      });
  }
  render() {
    return (
    <div>
      <h1>Dogs</h1>
      <input type="input" name = "name" placeholder="name" onChange = {this.onChangeHandler}/>
      <input type="input" name = "description" placeholder = "description" onChange = {this.onChangeHandler}/>
      <button onClick = {this.addDog}>submit</button>
        <DogListComponent dogs = {this.state.dogsList}/>
    </div>)
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));