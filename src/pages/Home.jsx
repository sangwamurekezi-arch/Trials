import MovieCard from "../components/MovieCard"
import {useState} from 'react'
function Home() {
    const [searchQuery, setSearchQuery] = useState("");
 
    const movies= [
        { id: 1, title: "The Shawshank Redemption", release_date: "1994" },
        { id: 2, title: "The Godfather", release_date: "1972" },
        { id: 3, title: "The Dark Knight", release_date: "2008" },
        { id: 4, title: "Pulp Fiction", release_date: "1994" },
        { id: 5, title: "Forrest Gump", release_date: "1994" },
        { id: 6, title: "Inception", release_date: "2010" },
        { id: 7, title: "Interstellar", release_date: "2014" },
        { id: 8, title: "Fight Club", release_date: "1999" },
        { id: 9, title: "The Matrix", release_date: "1999" },
        { id: 10, title: "Gladiator", release_date: "2000" },
        { id: 11, title: "Titanic", release_date: "1997" },
        { id: 12, title: "Avatar", release_date: "2009" },
        { id: 13, title: "Avengers: Endgame", release_date: "2019" },
    ];

    const handleSearch = (e) => {
        e.preventDefault()
    }
// The onChange handler updates the state, allowing the text to change
    return <div className="home">
        <form onSubmit ={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input"
                value={searchQuery}
                onChange = {(e) => setSearchQuery(e.target.value)}
            /> 
            <button type="submit" className="search-button"> Search </button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (
                movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    </div>
}

export default Home