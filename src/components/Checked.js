export const Checked = ({ checkbox }) => {

    return (
        <p>{checkbox.checked ? `${checkbox.id} is checked!` : ''}</p>
    );
}