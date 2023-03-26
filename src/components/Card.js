import { Switch, Card, CardContent, Slider, InputLabel, FormControl, Select, MenuItem, Typography } from "@mui/material"
import * as React from 'react';

function Online() {
    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
                <Typography>Online</Typography>
                <Switch defaultChecked />
            </CardContent>
        </Card>
    )
}

function Master() {
    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
                <Typography>Master</Typography>
                <Slider defaultValue={20} aria-label="Default" valueLabelDisplay="auto" step={10} />
            </CardContent>
        </Card>
    )

}

function Quality() {
    const [quality, setQuality] = React.useState('');

    const handleChange = (e) => {
        setQuality(e.target.value);
    };


    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
                <Typography>Quality</Typography>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Music Quality</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={quality}
                        label="Music Quality"
                        onChange={handleChange}
                    >
                        <MenuItem value={'Low'}>Low</MenuItem>
                        <MenuItem value={'Medium'}>Medium</MenuItem>
                        <MenuItem value={'High'}>High</MenuItem>
                    </Select>
                </FormControl>
            </CardContent>
        </Card>
    )

}

export { Online, Master, Quality }