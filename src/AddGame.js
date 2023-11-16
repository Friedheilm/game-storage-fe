import React, { Component } from 'react';

class AddGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize state properties to store form field values
      name: '',
      year: '',
      genre: '',
      platform: '',
      developer: '',
      publisher: '',
    };
  }

  // Implement handlers to update state when input values change
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Function to handle form submission and add a new game
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, year, genre, platform, developer, publisher } = this.state;

    // Create a new game object
    const newGame = {
      name,
      year,
      genre,
      platform,
      developer,
      publisher,
    };

    // Make a POST request to add the new game
    fetch('/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newGame),
    })
      .then((response) => {
        // Handle the response accordingly (e.g., display success message, update state)
        // Redirect to the game list page or perform other actions as needed
      })
      .catch((error) => {
        console.error('Error adding game:', error);
      });
  };

  render() {
    // Render a form with input fields corresponding to game attributes
    return (
      <div>
        <h1>Add New Game</h1>
        <form onSubmit={this.handleSubmit}>
          {/* Create input fields for each game attribute */}
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <label>
            Year:
            <input type="text" name="year" value={this.state.year} onChange={this.handleInputChange} />
          </label>
          <label>
            Genre:
            <input type="text" name="genre" value={this.state.genre} onChange={this.handleInputChange} />
          </label>
          <label>
            Platform:
            <input type="text" name="platform" value={this.state.platform} onChange={this.handleInputChange} />
          </label>
          <label>
            Developer:
            <input type="text" name="developer" value={this.state.developer} onChange={this.handleInputChange} />
          </label>
          <label>
            Publisher:
            <input type="text" name="publisher" value={this.state.publisher} onChange={this.handleInputChange} />
          </label>
          {/* Add a button to submit the form */}
          <button type="submit">Add Game</button>
        </form>
      </div>
    );
  }
}

export default AddGame;