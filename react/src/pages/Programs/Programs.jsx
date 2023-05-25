import Searchbar from "../../components/Searchbar.jsx";
import {useEffect, useState} from "react";
import LoadingSpinner from "../../components/LoaderSpinner";
import MuscleGroupRepository from "../../repository/MuscleGroupRepository.jsx";
import ProgramsRepository from "../../repository/ProgramsRepository.jsx";

function Programs() {
    const [muscles, setMuscles] = useState([]);
    const [programs, setPrograms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [isExistNewExercise, setExistNewExercise] = useState(true);
    const [searchField, setSearchField] = useState("");
    const [searchButton, setSearchButton] = useState(0);

    const  fetchData = () => {
        if (!isExistNewExercise) {
            return
        }
        let queryParams = [];
        queryParams['search'] = searchField;
        queryParams['page'] = page;
        setIsLoading(true);
        ProgramsRepository.get(queryParams)
            .then((response) => {
                if (response.data.last_page === page) {
                    setExistNewExercise(false);
                }
                setPrograms(prev => [...prev, ...response.data.data]);
                setIsLoading(false);
        })
    }

    const handleScroll = () => {
        if ((window.innerHeight + window.scrollY) + 1 > document.body.offsetHeight) {
            setPage(prevState => prevState + 1);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page, searchButton]);

    const clickSearchButton = (event) => {
        event.preventDefault();
        setSearchButton(prevState => prevState + 1);
        setPage(1);
        setPrograms([]);
        setExistNewExercise(true);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Searchbar
                urlCreateLink="/programs/create" nameLink="Create program"
                withSelect={false} value={searchField} setSearchField={setSearchField}
                clickSearchButton={clickSearchButton}/>
            <div className="container mt-5">
                <div className="p-2 me-3 w-100 d-flex justify-content-start flex-wrap">
                    {
                        programs.map((program) => {
                            return (
                                <div key={program.id} className="card m-3" style={{width: "30%"}}>
                                    <img src={import.meta.env.VITE_API_URL + "/storage/images/" + program.image}
                                         className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{program.header}</h5>
                                        <p className="card-text">
                                            {
                                                program.description.length > 30 ?
                                                    program.description.substring(0, 30) + '...' : program.description
                                            }
                                        </p>
                                        <p className="card-text">
                                            Features: {console.log(program)}
                                        </p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="text-center" style={isLoading ? null : {visibility: "hidden"}}>
                <LoadingSpinner />
            </div>
        </>
    );
}

export default Programs;
