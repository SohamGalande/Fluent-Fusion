import React, { useState } from 'react';
import '../Style/StudHome.css'

const StudHome = () => {
  const [language, setLanguage] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [country, setCountry] = useState('');

  // Function to handle filter changes
  const handleFilterChange = (filterName, value) => {
    switch (filterName) {
      case 'language':
        setLanguage(value);
        break;
      case 'priceRange':
        setPriceRange(value);
        break;
      case 'country':
        setCountry(value);
        break;
      default:
        break;
    }
  };

  const topTutors = [
    {
      id: 1,
      name: "John Doe",
      language: "English",
      price: "$30/hr",
      time: "Available Mon-Fri, 9am-5pm",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Jane Smith",
      language: "Spanish",
      price: "$25/hr",
      time: "Available Tue-Sat, 10am-6pm",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        name: "John Doe",
        language: "English",
        price: "$30/hr",
        time: "Available Mon-Fri, 9am-5pm",
        imageUrl: "https://via.placeholder.com/150"
      },
      {
        id: 4,
        name: "Jane Smith",
        language: "Spanish",
        price: "$25/hr",
        time: "Available Tue-Sat, 10am-6pm",
        imageUrl: "https://via.placeholder.com/150"
      },
      {
        id: 5,
        name: "John Doe",
        language: "English",
        price: "$30/hr",
        time: "Available Mon-Fri, 9am-5pm",
        imageUrl: "https://via.placeholder.com/150"
      },
      {
        id: 6,
        name: "Jane Smith",
        language: "Spanish",
        price: "$25/hr",
        time: "Available Tue-Sat, 10am-6pm",
        imageUrl: "https://via.placeholder.com/150"
      },
    // Add more top tutors as needed
  ];



  // Function to handle filter button click
  const handleFilterClick = () => {
    // Add your logic here to fetch and display learning resources based on the selected filters
    console.log('Filter button clicked');
    console.log('Selected Language:', language);
    console.log('Selected Price Range:', priceRange);
    console.log('Selected Country:', country);
  };

  return (
    <div className="homepage">
      
      <div className="filters">

      <div className="language-form-container">
        <div>
          <label htmlFor="language">Select Language to Learn:</label>
          <select id="language" onChange={(e) => this.handleFilterChange('language', e.target.value)}>
            <option value="">Language</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            {/* Add more languages as needed */}
          </select>
        </div>

        
        <div>
          <label htmlFor="priceRange">Select Price Range:</label>
          <input
            type="range"
            id="priceRange"
            name="priceRange"
            min="500"
            max="2500"
            onChange={(e) => console.log('Selected price:', e.target.value)}
          />
        
      
        </div>

        <div>
          <label htmlFor="country">Select Country Tutor:</label>
          <select id="country" onChange={(e) => this.handleFilterChange('country', e.target.value)}>
            <option value="">Select Country</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        <button onClick={handleFilterClick} >Filter</button>


      </div>
        
      </div>

      


      <div className="learning-resources">
        <h2>Top Tutors</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {topTutors.map(tutor => (
            <div key={tutor.id} style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
              <img src={tutor.imageUrl} alt={tutor.name} style={{ width: '100%', height: 'auto' }} />
              <div style={{ padding: '10px' }}>
                <h3>{tutor.name}</h3>
                <p><strong>Language:</strong> {tutor.language}</p>
                <p><strong>Price:</strong> {tutor.price}</p>
                <p><strong>Availability:</strong> {tutor.time}</p>
                <div style={{ marginTop: '10px' }}>
                  <button style={{ marginRight: '10px' }}>Book</button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};


export default StudHome;
