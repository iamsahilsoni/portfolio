import React,{Component} from 'react';
import './App.css';
import { Portfolio } from './Portfolio/Portfolio';
import { about } from '../constants/About';
import { skills } from '../constants/Skills';
import {projects } from '../constants/Projects';
export class App extends Component 
{
	constructor()
	{
		super();
		this.state={
			selectedSection:"",
			selectedHeading:"",
			selectedQuote:"",
			about,skills,projects
		}
	}

	componentDidMount ()
	{
		this.setState({
			selectedSection:"about",
			selectedHeading:about.heading,
			selectedQuote:about.quote,
		})
	}
	handleClick=(sectionName)=>
	{
		this.setState({
			selectedSection:sectionName,
			selectedHeading:this.state[sectionName].heading,
			selectedQuote:this.state[sectionName].quote,
		})
	}
	render()
	{
		return (
			<div className="App">
				<Portfolio
					selectedHeading={this.state.selectedHeading}
					selectedQuote={this.state.selectedQuote}
					selectedSection={this.state.selectedSection}
					handleClick={this.handleClick}
				/>
			</div>
		);
	}
}  

export default App;
