import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phoneNumber: '',
        peopleCount: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to the QR code page with form data
        navigate('/qr-code', { state: { formData } });
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');

                * {
                    font-family: 'Poppins', sans-serif;
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    outline: none;
                    border: none;
                    text-transform: capitalize;
                    transition: all .2s linear;
                }

                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-top: 50px;
                    min-height: 100vh;
                    background: linear-gradient(90deg, #0a8379 60%, #0a8379 40.1%);
                }

                .container form {
                    padding: 20px;
                    width: 400px;
                    background: #fff;
                    box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
                }

                .container form .row {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .container form .inputBox {
                    margin: 15px 0;
                }

                .container form .inputBox span {
                    margin-bottom: 10px;
                    display: block;
                }

                .container form .inputBox input {
                    width: 100%;
                    border: 1px solid #ccc;
                    padding: 10px 15px;
                    font-size: 15px;
                    text-transform: none;
                }

                .container form .inputBox input:focus {
                    border: 1px solid #000;
                }

                .container form .submit-btn {
                    width: 100%;
                    padding: 12px;
                    font-size: 17px;
                    background: #0a8379;
                    color: #fff;
                    margin-top: 5px;
                    cursor: pointer;
                }

                .container form .submit-btn:hover {
                    background: #0a8379;
                }
            `}</style>
            <section className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="inputBox">
                            <span>Name:</span>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="inputBox">
                            <span>Address:</span>
                            <input
                                type="text"
                                name="address"
                                placeholder="123 Main St"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="inputBox">
                            <span>Phone Number:</span>
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="(123) 456-7890"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="inputBox">
                            <span>People Count:</span>
                            <input
                                type="number"
                                name="peopleCount"
                                placeholder="1"
                                value={formData.peopleCount}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <input type="submit" value="Submit" className="submit-btn" />
                </form>
            </section>
        </>
    );
};

export default Payment;
