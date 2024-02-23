import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled('div')({
    maxWidth: 400,
    margin: 'auto',
    padding: theme => theme.spacing(2),
});

const FormControlStyled = styled(FormControl)({
    marginBottom: theme => theme.spacing(2),
    minWidth: '100%',
});

const ButtonStyled = styled(Button)({
    marginTop: theme => theme.spacing(2),
});

const AddCourseForm = () => {
    const [formData, setFormData] = useState({
        Coursename: '',
        level: '',
        months: '',
        CoursePrice: '',
        languageName: '', 
    });
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetchLanguages();
    }, []);

    const fetchLanguages = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/languages');
            setLanguages(response.data);
        } catch (error) {
            console.error('Error fetching languages:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { Coursename, level, months, CoursePrice } = formData;
            const tutorId = sessionStorage.getItem("userId");
            await axios.post(`http://localhost:8080/api/courses/${tutorId}`, { Coursename, level, months, CoursePrice });
            console.log('Course added successfully');
            // Clear the form after successful submission
            setFormData({
                Coursename: '',
                level: '',
                months: '',
                CoursePrice: '',
                languageName: '', 
            });
        } catch (error) {
            console.error('Error adding course:', error);
            // Handle error
            alert('Failed to add course. Please try again later.');
        }
    };

    return (
        <FormContainer>
            <Typography variant="h4" gutterBottom>Add Course</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="Coursename"
                    name="Coursename"
                    label="Course Name"
                    value={formData.Coursename}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <FormControlStyled>
                    <InputLabel id="level-label">Level</InputLabel>
                    <Select
                        labelId="level-label"
                        id="level"
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        fullWidth
                    >
                        <MenuItem value="">
                            <em>Select Level</em>
                        </MenuItem>
                        <MenuItem value="Intermediate">Intermediate</MenuItem>
                        <MenuItem value="Expert">Expert</MenuItem>
                    </Select>
                </FormControlStyled>
                <FormControlStyled>
                    <InputLabel id="language-label">Language</InputLabel>
                    <Select
                        labelId="language-label"
                        id="languageName"
                        name="languageName" 
                        value={formData.languageName}
                        onChange={handleChange}
                        fullWidth
                    >
                        <MenuItem value="">
                            <em>Select Language</em>
                        </MenuItem>
                        {languages.map(language => (
                            <MenuItem key={language.id} value={language.name}>{language.name}</MenuItem>
                        ))}
                    </Select>
                </FormControlStyled>
                <TextField
                    id="months"
                    name="months"
                    label="Duration (Months)"
                    value={formData.months}
                    onChange={handleChange}
                    type="number"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="CoursePrice"
                    name="CoursePrice"
                    label="Course Price"
                    value={formData.CoursePrice}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <ButtonStyled
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Add Course
                </ButtonStyled>
            </form>
        </FormContainer>
    );
};

export default AddCourseForm;
