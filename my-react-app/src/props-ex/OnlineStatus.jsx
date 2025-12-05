export default function OnlineStatus(props) {
    return(
        <div>
            <button className="changeTheCurrentStatus online" onClick={props.onClick}>{props.statusTexts}</button>
        </div>
    );
}