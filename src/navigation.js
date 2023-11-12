import { Link } from "react-router-dom";

export default function Navigation(){
    return(
        <>
        <Link to='/home'>
            <h3>Home</h3>
        </Link>
        <Link to='/pagetwo'>
            <h3>page 2</h3>
        </Link>
        <Link to='/pagethree'>
            <h3>Page 3</h3>
        </Link>
        <Link to='/pagefour'>
            <h3>Page 4</h3>
        </Link>
        <hr/>
        </>
    )
}