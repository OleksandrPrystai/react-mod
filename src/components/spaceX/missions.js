import {useEffect, useState} from "react";
import Mission from "./mission";

export default function Missions() {

    let [missions, setMissions] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(value => {
                setMissions(value);
            })
    }, [])

    return (
        <div>
            {
                missions.map(mission => <Mission
                    key = {mission.flight_number}
                    mission = {mission}

                />)
            }

        </div>
    )
}