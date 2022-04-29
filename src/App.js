import "./App.css";
import { Permissions } from "./pages/Permissions";
import { AccessControl } from "./pages/AccessControl";

export const App = () => {
  return (
    <div className="App">
      <Permissions />
    </div>
  );
};

export const Teachers = () => {
  return (
    <div className="App">
      <AccessControl />
    </div>
  );
};
