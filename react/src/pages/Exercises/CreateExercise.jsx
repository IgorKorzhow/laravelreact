import {useEffect, useRef, useState} from "react";
import axiosClient from "../../axios-client.js";
import {useNavigate} from "react-router-dom";

function CreateExercise() {

    const [muscles, setMuscles] = useState([]);
    const nameRef = useRef();
    const muscleRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        axiosClient.get("/muscleGroup/index")
            .then((response) => {
                setMuscles(response.data);
            })
            .catch((error) => {
                const response = error.response;
                if (response) {
                    console.log(response.data.errors);
                }
            })
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();
        const muscleGroup = muscleRef.current.value;
        if (muscleGroup === "default") {
            alert("You forgot about group of muscles. Plz choose thms");
            return
        }
        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("muscle_id", muscleGroup);
        const images = Object.values(imageRef.current.files);
        images.forEach(element => formData.append("images[]", element));
        formData.append("description", descriptionRef.current.value);
        axiosClient.post("/exercises", formData).then(() => {
            navigate("/exercises");
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="container mt-5 w-50">
            <div className="card p-4 bg-light">
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input ref={nameRef} type="text" className="form-control" id="name" required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="group" className="form-label">Choose a muscle group: </label>
                        <select ref={muscleRef} defaultValue="default" className="form-select form-select-md mb-3" id="group">
                            <option value="default">Choose group of muscles</option>
                            {muscles.map((element) => {
                                return <option key={element.id} value={element.id}
                                >{element["muscle_group"]}</option>
                            })}
                        </select>
                    </div>
                    <div className="input-group mb-4">
                        <label className="input-group-text" htmlFor="inputImage">Upload</label>
                        <input ref={imageRef} type="file" className="form-control"
                               id="inputImage" multiple required/>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea ref={descriptionRef} className="form-control" placeholder="Leave a description here" id="description"
                                  style={{height: "100px"}}></textarea>
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-outline-primary">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateExercise;
