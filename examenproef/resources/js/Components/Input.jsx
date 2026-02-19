const TextInput = ({label, placeholder, type, value, onChange}) => {
    return (
        <div className="textinput">
            <label className="textinput__label">{label}</label>
            <input placeholder={placeholder} value={value} onChange={onChange} type={type == null ? 'text' : type} className="textinput__input" />
        </div>
    );
}

export default TextInput;