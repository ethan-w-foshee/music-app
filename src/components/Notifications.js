

function OnlineCheck(props) {
    return (
        <div>
            {props.online && <div>
                NOT ONLINE
            </div>}
            {!props.online && <div>
                ONLINE
            </div>}
        </div>
    )
}

function VolumeCheck(props) {
    return (
        <div>
            {props.volume >= 80 && <div>
                TOO LOUD
            </div>}
            {props.volume === 0 && <div>
                MUTED
            </div>}
        </div>
    )

}

function QualityCheck(props) {
    return (
        <div>
            {props.quality === 0 && <div>
                BAD QUALITY
            </div>}
        </div>
    )
}

export { OnlineCheck, VolumeCheck, QualityCheck }