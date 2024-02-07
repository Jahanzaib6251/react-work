import { useState, useEffect } from 'react';

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
        if(searchTerm.length < 4) return; // Minimum length of search term is 4 characters
        
        setIsLoading(true);
        try {
            setIsLoading(true)  
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4b87bddd25e6d9c5f9eed8b35b92bd78&query=${searchTerm}`);
            const data = await response.json();
            setMovies(data.results);
            setIsLoading(false)  
    
        } catch (error) {
            console.error(error); 
            setIsLoading(false)        
        }
    };

    fetchMovies();
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='movi-srch-container'>
      <input type="text" placeholder="Search movies..." onChange={handleChange} />
      <div className='ms-inn-cont'>
        {isLoading ? (<p>Loading...</p>) : (movies.map((movie) => (
          <div key={movie.id}>
            <h5>{movie.title}</h5>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </div>
        )))}
      </div>
    </div>
  );
};

export default SearchMovies;