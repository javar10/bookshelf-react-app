import { useState } from 'react';
import DisplaySearchedBooks from './DisplaySearchedBooks';

const SearchBooks = () => {
    const [inputValue, setInputValue] = useState('');
    const [imageIdArray, setImageIdArray] = useState([]);
    const [titlesArray, setTitlesArray] = useState([]);
    const [searchData, setSearchData] = useState({});

    const fetchData = async () => {
        try {
            const title = inputValue.trim().replace(" ", "+");
            const response = await fetch(`https://openlibrary.org/search.json?title=${title}`);
            const data = await response.json();
            const fetchedTitlesArray = data.docs.map(item => item.title);
            const fetchedImageIdArray = data.docs.map(item => item.cover_edition_key);
            console.log(data);
            console.log(titlesArray)
            console.log(imageIdArray);

            setSearchData(data);
            setImageIdArray(fetchedImageIdArray);
            setTitlesArray(fetchedTitlesArray);
        }
        catch (error) {
            console.error('Error fetching data: ', error)
        }

    }

    const handleSearchInputChange = e => {
        setInputValue(e.target.value);
    }

    const handleSearchSubmit = e => {
        e.preventDefault();
        fetchData();
    }

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <h4>Add New Book</h4>
                <label htmlFor="bookSearch">Title</label>
                <input name="bookSearch" placeholder="Enter title" onChange={handleSearchInputChange} />
                <button>Search</button>
            </form>
            <DisplaySearchedBooks imageIdArray={imageIdArray} searchData={searchData}/>

            
        </div>
    )
}

export default SearchBooks