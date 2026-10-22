import './Search.css'

const Search = () => {
  return (
    <div className="search">
        <input className="search__input" type="text" />
        <button className="search__button">Go find 'em all!</button>
    </div>
  )
}

export default Search