import Carousel from "../components/Carousel.jsx";
import {useEffect, useState} from "react";
import ProgramsRepository from "../repository/ProgramsRepository.jsx";

function Main() {

    const [latestPrograms, setLatestPrograms] = useState([]);

    useEffect(() => {
        ProgramsRepository.getLastThreeRecords()
            .then(response => setLatestPrograms(response.data.data))
    }, []);

    return (
        <div className="d-flex justify-content-center mt-5">
            <Carousel programs={latestPrograms} />
        </div>
    );
}

export default Main;
