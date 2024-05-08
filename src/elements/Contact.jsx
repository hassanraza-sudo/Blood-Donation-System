    import React from 'react';

    const ContactsSection = () => {
    return (
        <div className="max-w-lg mx-auto py-12">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.96 6.555c-.1-.557-.46-.966-.964-1.071a15.948 15.948 0 0 0-6.033 0c-.505.105-.864.514-.964 1.07-1.195 7.077-1.203 7.108-1.203 7.108-.052.306.072.612.306.823a.815.815 0 0 0 .918.12c1.626-.864 3.336-1.294 5.064-1.294s3.438.43 5.064 1.294a.815.815 0 0 0 .918-.12.828.828 0 0 0 .306-.823s-.009-.031-1.204-7.108zM10 2c2.76 0 5 2.24 5 5 0 2.756-2.24 5-5 5s-5-2.244-5-5c0-2.76 2.24-5 5-5z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-700">Email: <a href="mailto:info@yourblooddonationapp.com" className="text-blue-500 hover:underline">info@yourblooddonationapp.com</a></span>
        </div>
        <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2c2.76 0 5 2.24 5 5v2c0 2.76-2.24 5-5 5s-5-2.24-5-5V7c0-2.76 2.24-5 5-5zM9 7H7V5h2v2zm2 3h2v2h-2v-2zm-2 0H7v-2h2v2zm4 2h-2V7h2v5zm-2-7H9V3h2v2z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-700">Address: 123 Main Street, City, Country</span>
        </div>
        <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2c2.76 0 5 2.24 5 5v2c0 2.76-2.24 5-5 5s-5-2.24-5-5V7c0-2.76 2.24-5 5-5zM9 7H7V5h2v2zm2 3h2v2h-2v-2zm-2 0H7v-2h2v2zm4 2h-2V7h2v5zm-2-7H9V3h2v2z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-700">Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a></span>
        </div>
        </div>
    );
    };

    export default ContactsSection;
