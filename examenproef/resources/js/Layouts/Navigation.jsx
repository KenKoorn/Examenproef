import { usePage } from "@inertiajs/react";

function Navigation(props){
    const user = usePage().props.auth.user;

    return(
        <header className="header">
            <a href={route('login')} className="header__link">login</a>
            <a href={route('register')} className="header__link">register</a>
        </header>
    );
}

export default Navigation;