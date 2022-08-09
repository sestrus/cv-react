import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
export const Layout = () => {
    return (
        <div className="layout">
            <nav>
                <ul className="list">

                    <li className="list-element">
                        <Link to="/links">Links</Link>
                    </li>
                    <li className="link-element">
                        <Link to="/mainpage">Main Page</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
}