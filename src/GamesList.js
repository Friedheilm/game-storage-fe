import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AddGameForm from './AddGame'; // Import the AddGameForm component

class GamesList extends Component {
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

  handleDelete = (id) => {
    // Function to delete a game by its ID
    fetch(`/games/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // If deletion is successful, update the state to reflect the changes
          const updatedGames = this.state.games.filter((game) => game.id !== id);
          this.setState({
            games: updatedGames,
          });
        }
      })
      .catch((error) => {
        console.error('Error deleting game:', error);
      });
  };

  render() {
    const { games, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>List of Games</h1>
        {games.length === 0 ? (
        <p>You don't have any games on the list.</p>
      ) : (
        <ul>
          {games.map((games) => (
            <li key={games.id}>
            <strong>Name:</strong> {games.name}<br />
            <strong>Year:</strong> {games.year}<br />
            <strong>Genre:</strong> {games.genre}<br />
            <strong>Platform:</strong> {games.platform}<br />
            <strong>Developer:</strong> {games.developer}<br />
            <strong>Publisher:</strong> {games.publisher}<br />
            <button onClick={() => this.handleDelete(games.id)}>Delete</button>
          </li>
          ))}
        </ul>
      )}

      {/* Add a Link to navigate to the AddGameForm component */}
      <Link to="/add-game">
        <button>Add New Game</button>
      </Link>
      </div>
    );
  }
}

export default GamesList;