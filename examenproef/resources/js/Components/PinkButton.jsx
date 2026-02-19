const PinkButton = ({text, onClick, processing, type}) => {
    return(
        <button onClick={onClick} disabled={processing} type={type} className="pinkbutton">
            {text}
        </button>
    );
}

export default PinkButton;