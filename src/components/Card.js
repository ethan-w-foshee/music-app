import { Switch, Card, CardContent, Slider, InputLabel, FormControl, Select, MenuItem } from "@mui/material"
import * as React from 'react';

function Online(props) {
    return (
        <Card className="Card" style={{ backgroundColor: "#9C27B0" }}>
            <CardContent className="CardInsides">
                <h1>Online Mode</h1>
                <p>Is the user connected to the internet?</p>
                <Switch defaultChecked onChange={props.handleChange} />
            </CardContent>
        </Card>
    )
}

function Master(props) {
    return (
        <Card className="Card" style={{ backgroundColor: "#9C27B0" }}>
            <CardContent className="CardInsides">
                <h1>Master Volume</h1>
                <p>Sets the volume in this application</p>
                <Slider defaultValue={20} value={props.volume} aria-label="Default" valueLabelDisplay="auto" step={10} onChange={props.handleChange} />
            </CardContent>
        </Card>
    )

}

function Quality(props) {
    return (
        <Card className="Card" style={{ backgroundColor: "#9C27B0" }}>
            <CardContent className="CardInsides">
                <h1>Sound Quality</h1>
                <p>Manually control the music quality</p>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Music Quality</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue={1}
                        value={props.quality}
                        label="Music Quality"
                        onChange={props.handleChange}
                    >
                        <MenuItem value={0}>Low</MenuItem>
                        <MenuItem value={1}>Medium</MenuItem>
                        <MenuItem value={2}>High</MenuItem>
                    </Select>
                </FormControl>
            </CardContent>
        </Card>
    )

}

export { Online, Master, Quality }