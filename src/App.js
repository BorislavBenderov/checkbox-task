import { useEffect, useState, useRef } from "react";
import { checkboxes } from "./checkboxes";
import { Checkbox } from "./components/Checkbox";
import HALFICON from './images/ic_checkbox_half.svg';
import UNCHECKICON from './images/ic_checkbox_unchecked.svg';

function App() {
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const checkboxRef = useRef();

  useEffect(() => {
    setData(checkboxes);
  }, []);

  const onEdit = () => {
    console.log('clicked');
  }

  return (
    <div className="App">
      <section className="checkbox">
        <div className="checkbox__group">
          <img src={checked ? HALFICON : UNCHECKICON} alt="" className={isAllChecked ? 'unchecked' : ''} />
          <label>
            <input
              ref={checkboxRef}
              type='checkbox'
              checked={checked}
              disabled
              onChange={(e) => setChecked(e.target.value)}
              style={{ display: 'none' }} />
            {data.every(x => x.checked === true) ? 'Everything is checked!' : 'Checkbox group'}
          </label>
        </div>
        {checkboxes.map(checkbox => <Checkbox key={checkbox.id} checkbox={checkbox} onEdit={onEdit} />)}
      </section>
    </div>
  );
}

export default App;
