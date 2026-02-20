import Checkbox from "@/Components/Checkbox";
import TextInput from "@/Components/Input";
import PinkButton from "@/Components/PinkButton";
import { useForm } from "@inertiajs/react";

function Login(){
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: false
    });

    const submit = (event) => {
        event.preventDefault();
        post('login', {
            onFinish: () => reset('password')
        });
    }

    return (
        <main className="main">
            <section className="auth auth__login">
                <form onSubmit={submit} className="auth__form">
                    <h1 className="auth__form--title">Login</h1>
                    <TextInput value={data.email} onChange={(event) => setData('email', event.target.value)} label="Email" type="email" error={errors.email}/>
                    <TextInput value={data.password} onChange={(event) => setData('password', event.target.value)} label="Password" type="password" error={errors.password}/>
                    <Checkbox label="Remember me" value={data.remember} onChange={(event) => setData('remember', event.target.checked)}/>
                    <PinkButton text="Login" type="submit"/>
                    <a href={route('password.request')} className="auth__form--forgot">Wachtwoord vergeten?</a>
                </form>
            </section>
        </main>
    );
}

export default Login;