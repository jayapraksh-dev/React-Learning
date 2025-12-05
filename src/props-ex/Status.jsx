export default function Status(props) {
    return(
        <span className={props.isOnline ? "userOnline" : "userOffline"}>*</span>
    )
}

