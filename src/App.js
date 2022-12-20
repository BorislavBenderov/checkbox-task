import { useEffect, useState } from "react";
import { checkboxes } from "./checkboxes";
import { Checkbox } from "./components/Checkbox";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(checkboxes);
  }, []);
  return (
    <div className="App">
      {checkboxes.map(checkbox => <Checkbox key={checkbox.id} checkbox={checkbox}/>)}
    </div>
  );
}

export default App;
