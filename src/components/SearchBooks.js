import { useState } from 'react';

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

    const handleSearchInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSearchSubmit = (e) => {
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
            <div className='displayBookSearch'>
                {imageIdArray.map((id, index) => {
                    if (id) {
                        return (
                            <div key={id} id={id} className='displayBookSearchCard'>
                                <img src={`https://covers.openlibrary.org/b/olid/${id}-M.jpg`}/>
                                <h4>{titlesArray[index]} - <span style={{fontStyle: 'italic'}}>{searchData.docs[index].first_publish_year}</span></h4>
                                <p>by {searchData.docs[index].author_name}</p>       
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default SearchBooks