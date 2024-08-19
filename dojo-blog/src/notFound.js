import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sryyyyy</h1>
            <p>That page cant be found</p>
            <Link to='/'>Back to home </Link>
        </div>
     );
}

export default NotFound;