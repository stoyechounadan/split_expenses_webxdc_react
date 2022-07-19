import { useContext } from "react";
import { ParticipantsContext } from "~/App";

export default function JoinScreen(props: any) {

    const participants: string[] = useContext(ParticipantsContext);

    const addParticipant = () => {
        let info: string = window.webxdc.selfName + " joined the shared expenses group";
        window.webxdc.sendUpdate(
            {
                payload: {
                    person: window.webxdc.selfName,
                    action: "join",
                },
                info,
            },
            info
        );
    }

    return (<main className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
        <h1>Join to start sharing expenses!</h1>
        <button onClick={addParticipant}>Join</button>
        <ul>
            {participants.map((person: string) => <li>{person}</li>)}
        </ul>
    </main>)
}

