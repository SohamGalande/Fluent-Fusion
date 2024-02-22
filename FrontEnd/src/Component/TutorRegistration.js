import React, { useState } from 'react';
import {
    MDBBtn,
    MDBInput,
    MDBContainer,
    MDBCheckbox,
  
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalDialog
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './TutorRegistration.css'; 
import axios from 'axios';

import img from '../Shared/Images/background2.jpg'; 


export default function TutorRegistration() {


//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [passwordMatch, setPasswordMatch] = useState(true);
    
//     const [showModal, setShowModal] = useState(false);

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleConfirmPasswordChange = (e) => {
//         setConfirmPassword(e.target.value);
//     };

//     const validatePasswords = () => {
//         setPasswordMatch(password === confirmPassword);
//     };

   

// const handleSubmit = async () => {
//     try {
//         const formData = {
//             name: document.getElementById('form1').value,
//             email: document.getElementById('form2').value,
//             // Add other form fields here
           
//         };

//         const response = await axios.post('', formData);

//         console.log('Response:', response.data);

//         // Handle successful form submission
//         console.log('Form submitted successfully');
//     } catch (error) {
//         console.error('Error submitting form:', error.message);
//     }
// };

    

    

//     const toggleModal = () => {
//         setShowModal(!showModal);
//     };

            const [formData, setFormData] = useState({
                name: '',
                email: '',
                language: '',
                proficiencyLevel: '',
                password: '',
                profilePic: null,
                certificate: null,
            });

            const handleInputChange = (event) => {
                const { name, value } = event.target;
                setFormData({ ...formData, [name]: value });
            };

            const handleFileChange = (event) => {
                const { name, files } = event.target;
                setFormData({ ...formData, [name]: files[0] });
            };


            const handleSubmit = async (event) => {
                event.preventDefault();
                

                const formDataToSend = new FormData();
                formDataToSend.append('profilePic', formData.profilePic);
                formDataToSend.append('certificate', formData.certificate);
                formDataToSend.append('fullname', formData.name);
                formDataToSend.append('email', formData.email);
                formDataToSend.append('language', formData.language);
                formDataToSend.append('proficiencyLevel', formData.proficiencyLevel);
                formDataToSend.append('password', formData.password);

                try {
                    const response = await axios.post('http://localhost:8080/tutor/tutors', formDataToSend);

                    console.log('Response:', response);

                    if (response.status === 201) {
                        console.log('User registered successfully:', response.data);
                        alert("Registration successful!!!");
                        // Reset form after successful registration
                        setFormData({
                            name: '',
                            email: '',
                            language: '',
                            proficiencyLevel: '',
                            password: '',
                            profilePic: null,
                            certificate: null,
                        });
                    } else {
                        console.error('Unexpected response:', response);
                        alert("Registration Failed !!!");
                    }
                } catch (error) {
                    console.error('Error registering user:', error);
                    console.log('Error response:', error.response); // Log error response for troubleshooting
                }
            };


    return (
        <div>
            <div className="box">
                <h4>Fluentify</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="profilePic" className="form-label">Upload Profile Picture</label>
                        <input type="file" className="form-control" id="profilePic" name="profilePic" accept=".png, .jpg, .jpeg" onChange={handleFileChange} />
                    </div>
                    {/* Add similar file input for certificate */}
                    <div className="mb-3">
                        <label htmlFor="certificate" className="form-label">Upload Certificate</label>
                        <input type="file" className="form-control" id="certificate" name="certificate" accept=".pdf" onChange={handleFileChange} />
                    </div>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={handleInputChange} value={formData.name} />
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" onChange={handleInputChange} value={formData.email} />
                    <input type="text" className="form-control" id="language" name="language" placeholder="Language" onChange={handleInputChange} value={formData.language} />
                    <input type="text" className="form-control" id="proficiencyLevel" name="proficiencyLevel" placeholder="Proficiency Level" onChange={handleInputChange} value={formData.proficiencyLevel} />
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={handleInputChange} value={formData.password} required />
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>


            {/* <MDBModal open={showModal} setOpen={setShowModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Terms and Conditions</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleModal}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <p>This is the content of your terms and conditions.</p>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleModal}>Close</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal> */}
        </div>
    );
}
