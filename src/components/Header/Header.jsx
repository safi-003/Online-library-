import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Welcome to our Online Library Management System</h2>
                
                <p className='header-text fs-18 fw-3'>Discover a vast collection of books covering various genres, authors, and subjects. Whether you're a literature enthusiast, a student in search of educational resources, or simply looking for your next great read, our online library has something for everyone. Browse through our extensive catalog and embark on a literary adventure.</p>
                
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header