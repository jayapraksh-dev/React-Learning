export default function Tech(props) {
    return(
        <div>
            Techs: {props.tech.map((item, i) => (
                <span key={i}>{item}, </span>
            ))}
        </div>
    );
}