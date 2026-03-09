const PinkButton = ({text, onClick, processing, type, route}) => {
    console.log(route);
    return route == undefined ?(
        <button onClick={onClick} disabled={processing} type={type} className="pinkbutton">
            {text}
        </button>
    ) : (
        <a href={route} className="pinkbutton">{text}</a>
    );
}

export default PinkButton;