

const DisplaySearchedBooks = ({imageIdArray, searchData}) => {
    return (
        <>
            <div className='displayBookSearch'>
                {imageIdArray.map((id, index) => {
                    if (id) {
                        return (
                            <div key={id} id={id} className='displayBookSearchCard'>
                                <img src={`https://covers.openlibrary.org/b/olid/${id}-M.jpg`} />
                                <h4>{searchData.docs[index].title} - <span style={{ fontStyle: 'italic' }}>{searchData.docs[index].first_publish_year}</span></h4>
                                <p>by {searchData.docs[index].author_name}</p>
                            </div>
                        )
                    }
                })}
            </div>
        </>

    )
}

export default DisplaySearchedBooks