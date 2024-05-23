import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Component/Home.css'

const Home = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('book');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        if (option === 'book') {
            navigate('/book');
        } else if (option === 'author') {
            navigate('/author');
        }
    };

    return (
        <div>
            <h1 className="library-title">Library Management System</h1>
            <div className="admin-dashboard">
                <h1>Admin Dashboard</h1>
                <div className="options">
                    <button onClick={() => handleOptionChange('book')} className={selectedOption === 'book' ? 'active' : ''}>Books</button>
                    <button onClick={() => handleOptionChange('author')} className={selectedOption === 'author' ? 'active' : ''}>Authors</button>
                </div>
                
            </div>
        </div>
    );
};

export default Home;