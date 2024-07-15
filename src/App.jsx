import Aos from "aos";
import UserDataProvider from "./Context/userDataContext/userDataContext";
import { defaults } from "chart.js";
import Home from "./Pages/Home/Home";
import { Offline, Online } from "react-detect-offline";
import OfflineComponent from "./Components/Offline/OfflineComponent";

function App() {
    //charts responsive and disable AspectRatio of charts
    defaults.maintainAspectRatio = false;
    defaults.responsive = true;

    //Aos animation library configuration
    Aos.init();
    return (
        <>
            <UserDataProvider>
                <Online>
                    <Home />
                </Online>

                {/* I used Detect Offline library to
                 handel the website if the user has not internet connection*/}

                <Offline>
                    <div className="min-h-screen flex justify-center items-center">
                        <OfflineComponent />
                    </div>
                </Offline>
            </UserDataProvider>
        </>
    );
}

export default App;
