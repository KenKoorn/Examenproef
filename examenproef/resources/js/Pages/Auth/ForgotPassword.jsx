import TextInput from "@/Components/Input";
import PinkButton from "@/Components/PinkButton";
import { useForm } from "@inertiajs/react";

function ForgotPassword({status}){
    const { data, setData, post, processing, errors } = useForm({
        email: ''
    });

    const submit = (event) => {
        event.preventDefault();
        post(route('password.email'));
    }

    console.log(status);

    return(
        <section className="auth auth__login">
            <form onSubmit={submit} className="auth__form">
                <h1 className="auth__form--title">Wachtwoord vergeten</h1>
                <p className="auth__form--status">{status}</p>
                <TextInput value={data.email} onChange={(event) => setData('email', event.target.value)} type="email" label="Email"/>
                <PinkButton text="Send link" type="submit"/>
            </form>
        </section>
    );
}

export default ForgotPassword;