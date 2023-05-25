import React, {useEffect, useState} from 'react';
import MuscleGroupRepository from "../repository/MuscleGroupRepository.jsx";
import MyCalendar from "../components/MyCalendar.jsx";
import Table from "../components/Table.jsx";

function Progress(props) {

    const [muscleGroup, setMuscleGroup] = useState([]);
    const [typeCalendar, setTypeCalendar] = useState("default");
    const [date, setDate] = useState(null);

    useEffect(() => {
        MuscleGroupRepository.get(setMuscleGroup);
    }, []);

    return (
        <div className="container d-flex justify-content-around mt-4">
            <div>
                <div className="mb-4">
                    <label htmlFor="calendar" className="form-label">Select calendar mode: </label>
                    <select defaultValue="default" className="form-select form-select-md mb-3"
                            value={typeCalendar} id="calendar"
                            onChange={event => setTypeCalendar(event.target.value)}>
                        <option value="default">default</option>
                        <option value="dateRange">date range</option>
                    </select>
                </div>
                <MyCalendar type={typeCalendar} date={date} setDate={setDate}/>
            </div>
            <div>
                <div className="mb-4">
                    <label htmlFor="muscleGroup" className="form-label">Select group of muscles for sorting: </label>
                    <select defaultValue="default" className="form-select form-select-md mb-3" id="muscleGroup">
                        <option value="default">default</option>
                        {muscleGroup.map((element) => {
                            return <option key={element.id} value={element.id}
                            >{element["muscle_group"]}</option>
                        })}
                    </select>
                </div>
                <div>
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default Progress;
