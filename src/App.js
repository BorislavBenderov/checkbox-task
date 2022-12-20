import { useEffect, useState } from "react";
import { checkboxes } from "./checkboxes";
import { Checkbox } from "./components/Checkbox";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(checkboxes);
  }, []);

  const onEdit = () => {
    console.log('clicked');
  }

  return (
    <div className="App">
      {checkboxes.map(checkbox => <Checkbox key={checkbox.id} checkbox={checkbox} onEdit={onEdit}/>)}
    </div>
  );
}

export default App;
