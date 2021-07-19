import '../styles/Search.css'

function Search() {
    return (
        <span className="header_centre">
            <form className="form_recherche" method="post" action="#">
                <input type="search" name="recherche" className="recherche" placeholder="Recherche" />
            </form>
        </span>
    )
}

export default Search