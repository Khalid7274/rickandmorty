import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Characters from './components/CharactersList';
import Footer from './components/Footer';
import About from './components/About';
import Episodes from './components/Episodes';
import Header from './components/Header';
import HomePage from './components/HomePage';

function App() {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    return (
        <Router>
            <div className='top-header'>
            <Header />
                <h1 className='app_title'>The Rick and Morty</h1>
                {/* Search input */}
                <div className='search-continer'>
                    <input
                        type='text'
                        placeholder='Search Characters...'
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <Routes>
                <Route path='/' element={
                    <>
                        <HomePage />
                        <Characters searchData={search} />
                    </>
                } />
                <Route path='/episodes' element={<Episodes />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
