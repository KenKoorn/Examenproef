const Checkbox = ({value, onChange, label}) => {
    return (
        <label className="checkbox">
            <input type="checkbox" checked={value} value={value} onChange={onChange} className="checkbox__input" />
            <span className="checkbox__mark"></span>
            {label}
        </label>
    );
}

export default Checkbox;