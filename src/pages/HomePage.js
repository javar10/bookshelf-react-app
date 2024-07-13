
import DisplayUsersBooks from "../features/userBooks/DisplayUsersBooks";
import Header from "../components/Header";
import Login from "../components/Login";
import SearchBooks from "../features/bookSearch/SearchBooks";


const HomePage = () => {

    return (
        <>
            <Header />
            <Login />
            <DisplayUsersBooks />
            <SearchBooks />

        </>


    )
};

export default HomePage;