import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import AdminNavBar from './AdminNavBar'

const AdminHome = () => {
    const [languages, setStudents] = useState([]);

    const [textInput, setTextInput] = useState('');
    const handleChange = (event) => {
        setTextInput(event.target.value);
    };

    useEffect(() => {
        // Fetch language
        axios.get('http://localhost:8080/adminhome/language')
          .then(response => setStudents(response.data))
          .catch(error => console.error('Error fetching languages:', error));

    }, []);

        
      

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Send the text input to the backend
        axios.post('http://localhost:8080/language', { languages: textInput })
            .then(response => {
                console.log('Language saved successfully:', response.data);
                // Optionally, reset the input field
                setTextInput('');
            })
            .catch(error => {
                console.error('Error saving language:', error);
            });
    };

    return (
        <div>
            <AdminNavBar/>
            <br/>

            <form onSubmit={handleSubmit}>
                <h2 style={{ fontStyle: 'bold' }}>Add Language:</h2>
                <div>
                    <input type='text' id='addland' style={{ width: '500px' }} value={textInput} onChange={handleChange} />
                </div>
                <button type="submit">ADD Language</button>
            </form>

            <section id="students">
                <h1>Languages</h1>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Language Name</th>
                    </tr>
                </thead>
                <tbody>
                    {languages.map(language => (
                    <tr key={language.id}>
                        <td>{language.id}</td>
                        <td>{language.languages}</td>
                    </tr>
                    ))}
                </tbody>
                </Table>
            </section>



        </div>
    )
}

export default AdminHome
