import React, { Component } from 'react';

class ObjectList extends Component {
  constructor() {
    super();
    this.state = {
      games: [], // To store the fetched objects
      isLoading: true, // To track loading state
    };
  }

  componentDidMount() {
    // Access the API key  and base URL from process.env
    const baseUrl = process.env.REACT_APP_baseUrl;
    
    // Define custom headers in an options object
    const requestOptions = {
      method: 'GET', // You can change the HTTP method as needed
      headers: {
        'Content-Type': 'application/json', // Set your custom headers here
      },
    };

    console.log(requestOptions);
    
    // Fetch data from a remote server (replace with your API endpoint)
    fetch('/games')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          games: data, // Store the fetched objects in state
          isLoading: false, // Update loading state
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { games, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>List of Games</h1>
        <ul>
          {games.map((games) => (
            <li key={games.id}>{games.name}</li>
            // Replace 'id' and 'name' with the actual properties of your objects
          ))}
        </ul>
      </div>
    );
  }
}

export default ObjectList;