import React, { Component } from 'react';
// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData, fetchCurrentCountry } from './API';

import covidImage from './Images/covid19img.png'
class App extends Component {
	state = {
		data: {},
		country: '',
		currentCountry: ''
	};

	handleCountryChange = async (country) => {
		//fetch the data
		const fetchedData = await fetchData(country);
		//set the state
		this.setState({ data: fetchedData, country: country })
	}
	async componentDidMount () {
		const fetchedData = await fetchData();
		const currentCountry = await fetchCurrentCountry(); //We use this value to show current country on top of the CountryPicker
		this.setState({ data: fetchedData, currentCountry: currentCountry });
	}
	render () {
		const { data, country, currentCountry } = this.state;
		return (
			<div className={ styles.container }>
				<img className={ styles.image } src={ covidImage } alt="COVID-19" />
				<Cards data={ data } />
				<CountryPicker handleCountryChange={ this.handleCountryChange } currentCountry={ currentCountry } />
				<Chart data={ data } country={ country } />
			</div>
		);
	}
}

export default App;
