import React, { Component } from 'react';
import Header from './Components/Header'
import EventsList from './Components/EventsList'
import Footer from './Components/Footer'
import EventsListChart from './Components/EventsListChart'

class App extends Component {
  state = {
    events: []
    // events: [
    //   {id: 1, event: {name: "testing event 1", ingest_time_ms: '07/25/2018', fraud_probability: 0}},
    //   {id: 2, event: {name: "testing event 2", ingest_time_ms: '07/25/2018', fraud_probability: 1}},
    //   {id: 3, event: {name: "testing event 3", ingest_time_ms: '07/25/2018', fraud_probability: 0.3}},
    // ]
  }

  // AJAX to initally set state:
  componentDidMount = async() => {
    await this.getDataFromAPI()
  }

  getDataFromAPI = async() => {
    // fetch the events
    const eventsJSON = await fetch('http://ec2-54-91-86-14.compute-1.amazonaws.com:3333/events')
    let events = await eventsJSON.json()
    console.log('events jSON from server >>>', events)

    // then set the state
    this.setState({events})
  }

  render() {
    const {events} = this.state;

    return (
      <div className="App">
        <Header />
        <EventsListChart />
        <EventsList events={events}/>
        <Footer />
      </div>
    );
  }
}

export default App;
