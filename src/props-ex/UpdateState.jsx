export default function UpdateState({updateMessage}) {
    return(
        <div>
            <button onClick={() => updateMessage("Thankyou For Visiting.")}>Send Message</button>
        </div>
    );
}