import TextInput from "@/Components/Input";
import PinkButton from "@/Components/PinkButton";hx
import { useForm } from "@inertiajs/react";

function Register(){
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        name: '',
        password: '',
        password_confirmation: ''
    });

    const submit = (event) => {
        event.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation')
        });
    }

    return(
        <main className="main">
            <section className="auth">
                <h1 className="auth__title">Docent aanmaken</h1>
                <form onSubmit={submit} className="auth__form">
                    <TextInput value={data.email} onChange={(event) => setData('email', event.target.value)} label="Email" type="email" error={errors.email}/>
                    <TextInput value={data.name} onChange={(event) => setData('name', event.target.value)} label="Name" error={errors.name}/>
                    <TextInput value={data.password} onChange={(event) => setData('password', event.target.value)} label="Password" type="password" error={errors.password}/>
                    <TextInput value={data.password_confirmation} onChange={(event) => setData('password_confirmation', event.target.value)} label="Password confirmation" type="password" error={errors.password_confirmation}/>
                    <PinkButton text="Register" type="submit" processing={processing}/>
                </form>
            </section>
        </main>
    );
}

export default Register;