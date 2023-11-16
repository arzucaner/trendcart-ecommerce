import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">About Us</h3>
                        <p></p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                        <p>Address: Sample Street No:123, London, United Kingdom</p>
                        <p>Email: info@trendcard.com</p>
                        <p>Phone: +44 123 456 7890</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
