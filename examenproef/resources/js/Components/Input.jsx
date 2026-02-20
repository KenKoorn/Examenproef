const TextInput = ({label, placeholder, type, value, onChange, error}) => {
    return (
        <div className="textinput">
            <label className="textinput__label">{label}</label>
            <input placeholder={placeholder} value={value} onChange={onChange} type={type == null ? 'text' : type} readOnly={onChange == null} className="textinput__input" />
            <p className="textinput__error">{error}</p>
        </div>
    );
}

export default TextInput;