export const Checkbox = ({checkbox}) => {
    return (
        <div className="checkboxes">
            <label>
                <img src="" alt="" />
                <input type="checkbox" />
                {checkbox.label}
            </label>
        </div>
    );
}