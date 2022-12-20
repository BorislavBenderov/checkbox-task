import CHECKICON from '../images/ic_checkbox_checked.svg';
import UNCHECKICON from '../images/ic_checkbox_unchecked.svg';

export const Checkbox = ({ checkbox, onEdit }) => {
    return (
        <div className="checkboxes">
            <label>
                <img className="checkbox__img" src={checkbox.checked ? CHECKICON : UNCHECKICON} alt="" />
                <input
                    type="checkbox"
                    onChange={() => !checkbox.checked}
                    checked={checkbox.checked}
                    onClick={() => onEdit(checkbox.id)}
                    style={{ display: "none" }} />
                {checkbox.label}
            </label>
        </div>
    );
}