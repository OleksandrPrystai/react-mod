import './missionStyle.css'

export default function Mission({mission}) {


    if (mission.launch_year !== "2006") {
        return (
            <div className='spaseStyle'>
                <h1>{mission.mission_name}</h1>
                {' '}
                <h1> {mission.launch_year}</h1>
                {' '}
                <img src={mission.links.mission_patch_small} alt="dssdf"/>

            </div>
        )
    }
}