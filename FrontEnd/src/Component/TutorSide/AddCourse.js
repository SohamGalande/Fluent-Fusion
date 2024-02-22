import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddCourseForm = () => {
    const [formData, setFormData] = useState({
        tutorName: '',
        language: '',
        duration: '',
        courseName: '',
        level: ''
    });
    const [languages, setLanguages] = useState([]);
    const [durations, setDurations] = useState([]);

    useEffect(() => {
        // Fetch languages and durations from the backend when the component mounts
        fetchLanguages();
        fetchDurations();
    }, []);

    const fetchLanguages = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/languages');
            setLanguages(response.data);
        } catch (error) {
            console.error('Error fetching languages:', error);
        }
    };

    const fetchDurations = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/durations');
            setDurations(response.data);
        } catch (error) {
            console.error('Error fetching durations:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'duration') {
            setFormData({ ...formData, duration: { months: value } });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/courses/add-course', formData);
            // Optionally, you can redirect the user or show a success message here
            console.log('Course added successfully');
        } catch (error) {
            console.error('Error adding course:', error);
            // Handle error, e.g., display error message to the user
        }
    };

    return (
        <div>
            <h2>Add Course</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tutorName">Tutor Name:</label><br />
                <input type="text" id="tutorName" name="tutorName" value={formData.tutorName} onChange={handleChange} /><br />
                
                <label htmlFor="language">Language:</label><br />
                <select id="language" name="language" value={formData.language} onChange={handleChange}>
                    <option value="">Select Language</option>
                    {languages.map(language => (
                        <option key={language.id} value={language.name}>{language.name}</option>
                    ))}
                </select><br />
                
                <label htmlFor="duration">Duration:</label><br />
                <select id="duration" name="duration" value={formData.duration} onChange={handleChange}>
                    <option value="">Select Duration</option>
                    {durations.map(duration => (
                        <option key={duration.id} value={duration.months}>{duration.months}</option>
                    ))}
                </select><br />
                
                <label htmlFor="courseName">Course Name:</label><br />
                <input type="text" id="courseName" name="courseName" value={formData.courseName} onChange={handleChange} /><br />
                
                <label htmlFor="level">Level:</label><br />
                <select id="level" name="level" value={formData.level} onChange={handleChange}>
                    <option value="">Select Level</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                </select><br />
                
                <button type="submit">Add Course</button>
            </form>
        </div>
    );
};

export default AddCourseForm;
