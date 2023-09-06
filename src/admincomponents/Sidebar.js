function Sidebar() {

    return (
        // <h1>om ganeshay namah</h1>
     
        <div className="dash">
            <div className="sidetitle">
            <img src="images/blood.png" className="bld"></img>
            <h3 className="rakt">Raktkosh</h3>
            </div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" href="#"><i class="fa-solid fa-house"></i> Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i class="fa-solid fa-message"></i> Messages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i class="fa-regular fa-user"></i> Users</a>
                </li>
                <li className="nav-item last">
                    <a className="nav-link " href="#"><i class="fa-solid fa-bookmark"></i> Collections</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#"><i class="fa-regular fa-id-badge"></i> Account</a>
                </li><li className="nav-item">
                    <a className="nav-link disabled" href="#"><i class="fa-solid fa-right-from-bracket"></i> Logout</a>
                </li>
            </ul>
        </div>
        
      
    )
}
export default Sidebar