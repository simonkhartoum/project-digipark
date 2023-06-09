import React, { useState } from 'react';
import '../css/tablestyle.css';

function Form() {
  const [formData, setFormData] = useState({
    region_name: '',
    lot_num: '',
    name: '',
    county: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:9292/parkings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setFormData({
          region_name: '',
          lot_num: '',
          name: '',
          county: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Region Name:
          <select
            name="region_name"
            value={formData.region_name}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a region</option>
            <option value="Westlands">Westlands</option>
            <option value="Northlands">Northlands</option>
            <option value="Eastlands">Eastlands</option>
          </select>
        </label>
      </div>
      <br />
      <div className="form-group">
        <label>
          Lot Number:
          <input
            type="number"
            name="lot_num"
            value={formData.lot_num}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <br />
      <div className="form-group">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <br />
      <div className="form-group">
        <label>
          County:
          <input
            type="text"
            name="county"
            value={formData.county}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <br />
      <button style={{ backgroundColor: 'rgb(15, 226, 155)' }} type="submit">Submit</button>
    </form>
  );
}

export default Form;
