import "./App.css";
import "./styles/Colors.css";

import CustomThemeButton from "./components/CustomButton/CustomThemeButton/CustomThemeButton";

function App() {
  return (
    <div className="container">
      <CustomThemeButton type="tertiary" text="Nterra gelb" />
    </div>
  );
}

export default App;
