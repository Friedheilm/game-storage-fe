import React, { Component } from 'react';

class ObjectList extends Component {
  constructor() {
    super();
    this.state = {
      objects: [], // To store the fetched objects
      isLoading: true, // To track loading state
    };
  }

  componentDidMount() {
    // Fetch data from a remote server (replace with your API endpoint)
    fetch('https://api.example.com/objects')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          objects: data, // Store the fetched objects in state
          isLoading: false, // Update loading state
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { objects, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>List of Objects</h1>
        <ul>
          {objects.map((object) => (
            <li key={object.id}>{object.name}</li>
            // Replace 'id' and 'name' with the actual properties of your objects
          ))}
        </ul>
      </div>
    );
  }
}

export default ObjectList;