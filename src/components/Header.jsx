import ArrowRight from '../assets/icon-arrow.svg'

function Header() {
    return ( 
        <div>
            <header className="header">
        <div className="input-container">
            <h1>IP Adress Tracker</h1>
            <form className="form" >
                <div className="form-control">
                    <input type="number" className="input" placeholder='Search for any IP address or domain' />
                    <button type="submit" className="btn">
                        <img src={ArrowRight} alt="btn" />
                    </button>
                </div>
            </form>
        </div>

        <div className="info">
            <ul>
                <li>
                    <h3>IP ADRESS</h3>
                    <p>192.212.174.101</p>
                </li>
                <li>
                    <h3>Location</h3>
                    <p>Brooklyn, NY
10001</p>
                </li>
                <li>
                    <h3>Timezone</h3>
                    <p>UTC -05:00</p>
                </li>
                <li>
                    <h3>ISP</h3>
                    <p>SpaceX Starlink</p>
                </li>
            </ul>
        </div>
            </header>
        </div>
     );
}

export default Header;