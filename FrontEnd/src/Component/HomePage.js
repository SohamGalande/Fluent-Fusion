import React from 'react';
import Layout from './Layout';
import Sliderbar from './Sliderbar';
import CardLanguages from './CardLanguages';

const HomePage = () => {

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

  return (
    <Layout>
      <Sliderbar />
      <CardLanguages />

      <br></br>
      <br></br>
      <br></br>

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
                  <a href='./login'>
                    <button style={{ marginRight: '10px' }}>Book</button>
                  </a>

                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
          
            

    </Layout>
  );
}

export default HomePage;