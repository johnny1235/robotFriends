import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';

class App extends React.Component {
	constructor()
	{
		super();
		this.state = { 
			robots: [],
			searchField: ''
		}
	}

	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users').then(response => { return response.json()}).then( users => { this.setState({robots: users}) });
		
	}

	onSearchChange = (event) => { // use => to change the this object from input back to App to get the state fields
		this.setState({ searchField: event.target.value}) // Best way to change states... not this.state.robots = ... 
	}
	render(){
	    const filteredRobots = this.state.robots.filter(robots =>
		{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		return(
			<div className='tc bg-washed-blue bw1 b--black'>
			<h1> RoboFriends </h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>

			</div>

			)
	}
}

export default App;