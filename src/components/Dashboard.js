import { Online, Master, Quality } from "./Card.js"
import { Grid } from '@mui/material'
import { OnlineCheck, VolumeCheck, QualityCheck } from './Notifications.js'
import './Dashboard-Styles.css'
import React from "react"

function Dashboard() {

    const [online, setOnline] = React.useState(false)
    const [volume, setVolume] = React.useState(30)
    const [quality, setQuality] = React.useState(0)

    return (
        <div className="dashy">
            <h1 className="Welcome">Welcome User!</h1>
            <Grid container spacing={2} padding="5vw">
                <Grid xs={4} padding="2vw">
                    <Online handleChange={() => setOnline(!online)} />
                </Grid>
                <Grid xs={4} padding="2vw">
                    <Master handleChange={(volume) => setVolume(volume.target.value)} />
                </Grid>
                <Grid xs={4} padding="2vw">
                    <Quality handleChange={(quality) => setQuality(quality.target.value)} />
                </Grid>
            </Grid>
            <h1 className="Notifs">Notifications:</h1>
            {/* {online && <OnlineCheck />} */}
            <OnlineCheck online={online} />
            <VolumeCheck volume={volume} />
            <QualityCheck quality={quality} />
        </div>
    )
}


export default Dashboard