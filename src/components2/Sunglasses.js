function Sunglasses() {

    return (
        <div className="container">
        <div id="carouselExample" className="carousel slide">
            <p className="glass-text">Sunglasses</p>
            <hr className="titlehr"></hr>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/sung1.png" className="d-block w-100" ></img>
                </div>
                <div class="carousel-item">
                    <img src="images/sung2.png" className="d-block w-100" ></img>
                </div>
                {/* <div className="carousel-item">
                    <img src="images/sg1.jpg" className="d-block w-100" ></img>
                </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    )
}
export default Sunglasses