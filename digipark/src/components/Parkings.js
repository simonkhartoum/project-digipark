import React, { useState } from 'react';

function Parkings() {
  const parkingsData = [
    {
      "id": 1,
      "name": "westi",
      "lot_num": 7,
      "region_id": 1,
      "county": "Kanairo",
      "created_at": "2023-06-08T05:15:14.458Z",
      "updated_at": "2023-06-08T13:24:13.736Z"
    },
    {
      "id": 12,
      "name": "44",
      "lot_num": 4,
      "region_id": 6,
      "county": "Githu",
      "created_at": "2023-06-08T09:31:36.267Z",
      "updated_at": "2023-06-08T09:31:36.267Z"
    },
    {
      "id": 20,
      "name": "junction",
      "lot_num": 7,
      "region_id": 8,
      "county": "Macha",
      "created_at": "2023-06-08T14:06:20.279Z",
      "updated_at": "2023-06-08T14:06:20.279Z"
    }
  ];

  const counties = ['Kanairo', 'Macha', 'Githu'];

  const [selectedCounty, setSelectedCounty] = useState(null);
  const [bookingData, setBookingData] = useState({
    phoneNumber: '',
    selectedParking: null
  });

  const handleCountyChange = (e) => {
    setSelectedCounty(e.target.value);
  };

  const handleBooking = (parking) => {
    setBookingData({ phoneNumber: '', selectedParking: parking });
  };

  const handlePhoneNumberChange = (e) => {
    setBookingData({ ...bookingData, phoneNumber: e.target.value });
  };

  const handleBook = () => {
    
    setBookingData({ phoneNumber: '', selectedParking: null });
  };

  const filteredParkings = parkingsData.filter(parking => parking.county === selectedCounty);

  return (
    <div className="container">
      <div>
        <select value={selectedCounty} onChange={handleCountyChange}>
          <option value="">Select County</option>
          {counties.map(county => (
            <option value={county} key={county}>{county}</option>
          ))}
        </select>
      </div>

      {selectedCounty && filteredParkings.length > 0 ? (
        filteredParkings.map(parking => (
          <div key={parking.id}>
            <p>County: {parking.county}</p>
            <p>Number of Parking Lots: {parking.lot_num}</p>
            <button onClick={() => handleBooking(parking)}>Book</button>
            <hr />
          </div>
        ))
      ) : (
        <p>No parkings available for the selected county.</p>
      )}

      {bookingData.selectedParking && (
        <div className="booking-menu">
          <h3>Book Parking</h3>
          <p>County Name: {bookingData.selectedParking.county}</p>
          <input
            type="text"
            placeholder="Enter phone number"
            value={bookingData.phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <button onClick={handleBook}>Book</button>
        </div>
      )}

      {parkingsData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>County</th>
              <th>Number of Lots</th>
            </tr>
          </thead>
          <tbody>
            {parkingsData.map(parking => (
              <tr key={parking.id}>
                <td>{parking.id}</td>
                <td>{parking.county}</td>
                <td>{parking.lot_num}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Parkings;
