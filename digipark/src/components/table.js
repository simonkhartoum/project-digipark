
import React from 'react';
import TableRow from './prod';
import '../css/tablestyle.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkings: [],
    };
  }

  componentDidMount() {
    this.fetchParkings();
  }

  fetchParkings = () => {
    fetch('http://localhost:9292/parkings')
      .then(response => response.json())
      .then(data => {
        this.setState({ parkings: data });
      })
      .catch(error => {
        console.error('Error fetching parkings:', error);
      });
  }

  handleUpdateLotNum = (parkingId, newLotNum) => {
    fetch(`http://localhost:9292/parkings/${parkingId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        lot_num: newLotNum
      })
    })
      .then(response => response.json())
      .then(data => {
        // Update the parking with the new lot_num value in the state
        const updatedParkings = this.state.parkings.map(parking => {
          if (parking.id === parkingId) {
            return {
              ...parking,
              lot_num: newLotNum
            };
          }
          return parking;
        });
        this.setState({ parkings: updatedParkings });
        console.log(`Parking with id ${parkingId} updated with new lot_num ${newLotNum}`);
      })
      .catch(error => console.error(`Failed to update parking with id ${parkingId}:`, error));
  };

  handleDelete = (parkingId) => {
    // Filter out the parking with the given id
    const updatedParkings = this.state.parkings.filter(
      (parking) => parking.id !== parkingId
    );

    this.setState({ parkings: updatedParkings });

    fetch(`http://localhost:9292/parkings/${parkingId}`, {
      method: 'DELETE',
    }).then(() => {
      console.log(`Parking with id ${parkingId} deleted from the backend`);
    });
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">County</th>
            <th scope="col">Region ID</th>
            <th scope="col">No of lots</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.parkings.map((parking) => (
            <TableRow
              key={parking.id}
              id={parking.id}
              name={parking.name}
              county={parking.county}
              region_id={parking.region_id}
              lot_num={parking.lot_num}
              ondelete={this.handleDelete}
              updating={this.handleUpdateLotNum}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
