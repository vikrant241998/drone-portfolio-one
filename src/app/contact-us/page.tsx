"use client";
import React, { useState, FormEvent } from 'react';
import '../styles/contact.css';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

const INITIAL_STATE: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
};

const ContactPage = () => {
    // State hooks
    const [formData, setFormData] = useState<FormData>(INITIAL_STATE);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors(prevErrors => ({
            ...prevErrors,
            [e.target.name]: undefined,
        }));
    };

    // Form Validation Logic
    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        // ✅ .trim() added for validation
        if (!formData.firstName.trim()) newErrors.firstName = 'Enter a first name.';
        if (!formData.lastName.trim()) newErrors.lastName = 'Enter a last name.';

        // Basic email validation
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Enter an email address like example@mysite.com.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Form Submission Handler
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form Submitted:', formData);

            alert('Message sent successfully!');

            setFormData(INITIAL_STATE);
            setErrors({});
        }
    };

    return (
        <main className="contact-page-content dark-theme">
            <section className="contact-section">

                {/* --- Left Column: Contact Information --- */}
                <div className="contact-info" data-aos="fade-up"
                    data-aos-duration="3000">
                    <h1 className="page-title">Contact</h1>
                    <p className="represented-by">Represented By<br />
                        **Aviation Media Group**</p>
                    <p>Email: <a href="mailto:info@skymedia.com" className="contact-link">info@skymedia.com</a></p>
                    <p>Phone: <a href="tel:+911234567890" className="contact-link">+91 123-456-7890</a> </p>
                    <p>Website: <a href="https://www.your-drone-portfolio.com" className="contact-link">Your-Drone-Portfolio.com</a></p>
                </div>

                {/* --- Right Column: Contact Form --- */}
                <div className="contact-form-container" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>

                        {/* First Name & Last Name Row */}
                        <div className="form-row">
                            <div className="input-group">
                                <label htmlFor="firstName">First Name *</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={errors.firstName ? 'input-error' : ''}
                                />
                                {errors.firstName && (
                                    <div className="error-message">
                                        <span className="error-icon">ⓘ</span> {errors.firstName}
                                    </div>
                                )}
                            </div>
                            <div className="input-group">
                                <label htmlFor="lastName">Last Name *</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={errors.lastName ? 'input-error' : ''}
                                />
                                {errors.lastName && (
                                    <div className="error-message">
                                        <span className="error-icon">ⓘ</span> {errors.lastName}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Email & Phone Row */}
                        <div className="form-row">
                            <div className="input-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'input-error' : ''}
                                />
                                {errors.email && (
                                    <div className="error-message">
                                        <span className="error-icon">ⓘ</span> {errors.email}
                                    </div>
                                )}
                            </div>
                            <div className="input-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Message Group */}
                        <div className="input-group message-group">
                            <label htmlFor="message">Leave us a message...</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;