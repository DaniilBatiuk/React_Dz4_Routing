import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return <div>
        <header>
            <nav>
                <ul className="ulLinks">
                    <li>
                        <Link to="/City">City</Link>
                    </li>
                    <li>
                        <Link to="/Attraction">Attraction1</Link>
                    </li>
                    <li>
                        <Link to="/AnotherAttraction">Attraction2</Link>
                    </li>
                    <li>
                        <Link to="/Photos">Photos</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <aside></aside>
        <main>
            <div class="wrapper">
                <div class="__container">
                    <Outlet></Outlet>
                </div>
            </div>
        </main>
        <div></div>
        <footer></footer>
    </div>
}