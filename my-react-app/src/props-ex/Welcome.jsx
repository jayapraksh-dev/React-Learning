import MoreInfo from "./MoreInfo";
import Status from "./Status";
import Tech from "./Tech";
import OnlineStatus from "./OnlineStatus";
import Card from "./Card";
import UpdateState from "./UpdateState";
import { useState } from "react";


function Welcome(props) {
    const userInfo = { age:25, role: "Developer"};
    const items = ['JS', 'React', 'PHP', 'Laravel'];
    const userStatus = true;
    let statusText = "Online";
    let [message, setmessage] = useState("");
    function statusChange() {
        alert('Your in online.');
    }
    return(
        <>
            <div>
                <Card>
                    <span>Hi! There.</span>
                </Card>
                <h1>React Props Components! 🚀</h1>
                <h2>Welcome {props.name}<Status isOnline={userStatus} /> !</h2>
                <MoreInfo data={userInfo} />
                <Tech tech={items} />
                <OnlineStatus onClick={statusChange} statusTexts={statusText} />
                <UpdateState updateMessage={setmessage} />
                <h3>{message}</h3>
            </div>
        </>
    )
}

export default Welcome;