import "./App.css";
import AttendanceBook from "./AttendanceBook";
import BoilingVerdict from "./BoilingVerdict";
import LangdingPage from "./LandingPage";
import LoginControl from "./LoginControl";
import MainPage from "./MainPage";
import MyButton from "./MyButton";
import NameForm from "./NameForm";
import NumberList from "./NumberList";
import Midterm from "./Test/midterm";
import Toggle from "./Toggle";
import ToolBar from "./ToolBar";
import WarningBanner from "./WarningBanner";
import Accommodate from "./chapter_07/AccommoDate";
import SignUp from "./chapter_11/SingUp";

function App() {
  return (
    <div className="App">
      <BoilingVerdict celsius="100" />
    </div>
  );
}

export default App;
