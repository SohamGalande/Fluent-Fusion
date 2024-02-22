import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import AdminNavBar from './AdminNavBar';

const AllFeedBackList = () => {

    const [feedback, setFeedback] = useState([]);
    
    useEffect(() => {
        fetchFeedback();  
    }, []);

    const fetchFeedback = async () => {
        try {
          const response = await axios.get('http://your-api-url/feedback');
          setFeedback(response.data);
        } catch (error) {
          console.error('Error fetching feedback:', error);
        }
      };
    return (
        <div>
        <AdminNavBar/>
            <section id="feedbacks">
        <h2>Feedback</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {feedback.map(feedbackItem => (
              <tr key={feedbackItem.id}>
                <td>{feedbackItem.user}</td>
                <td>{feedbackItem.role}</td>
                <td>{feedbackItem.feedback}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>

        </div>
    )
}

export default AllFeedBackList
