import JoinScreen from './components/JoinScreen'
import { createContext, FC, useState } from 'react'


//types required for the component state
// interface App {
//   participants: string[];
// }

//create the context, the context type we defined it in the interface appState with all the props the app will need
export const ParticipantsContext = createContext<string[]>([])

export default function App() {

  //useState needs the interface also to get types and initialization
  const [participants, setParticipants] = useState<string[]>([]); //the general state of the app, needs a generic type<> and a default value []

  useEffect(() => {
    window.webxdc.setUpdateListener(function (update) {
      if (update.payload.action == "join") {
        setParticipants(
          (state) => {
            //swap this array with the former one
            return [...state, update.payload.person]
          }
        );
      }
    });
  }, []);

  console.log(participants);

  return (
    <ParticipantsContext.Provider value={participants}>
      <JoinScreen></JoinScreen>
    </ParticipantsContext.Provider>
  )
}
