import {NavLink} from "react-router-dom";

function Carousel({programs}) {

    let carouselCards = [];

    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            carouselCards.push(
                <div className="carousel-item active">
                    <NavLink href="/fasd">
                        <img src={import.meta.env.VITE_API_URL + "/storage/images/" + "1cIkeHxP8gwkuAt4Y0Bqj1SKU0YHJIceziG5ACPk.jpg"}
                             className="d-block w-100" alt="..." />
                    </NavLink>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
            )
        }
    }

    return (
        <div id="carouselExampleCaptions" className="carousel slide w-50" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <a href="/fasd">
                        <img src={import.meta.env.VITE_API_URL + "/storage/images/" + "1cIkeHxP8gwkuAt4Y0Bqj1SKU0YHJIceziG5ACPk.jpg"}
                             className="d-block w-100" alt="..." />
                    </a>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <a href="/fasd">
                        <img src={import.meta.env.VITE_API_URL + "/storage/images/" + "1cIkeHxP8gwkuAt4Y0Bqj1SKU0YHJIceziG5ACPk.jpg"}
                             className="d-block w-100" alt="..." />
                    </a>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <a href="/fas">
                        <img src={import.meta.env.VITE_API_URL + "/storage/images/" + "1cIkeHxP8gwkuAt4Y0Bqj1SKU0YHJIceziG5ACPk.jpg"}
                             className="d-block w-100" alt="..." />
                    </a>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
