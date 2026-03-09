import TextInput from "@/Components/Input";
import PinkButton from "@/Components/PinkButton";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";

function ResetPassword({token, email}){
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: ''
    });

    const submit = (event) => {
        event.preventDefault();
        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation')
        });
    }
    console.log(errors);

    return (
        <section className="auth auth__login">
            <form onSubmit={submit} className="auth__form">
                <h1 className="auth__form--title">Reset password</h1>
                <TextInput value={data.email} label="Email" type="email" error={errors.email}/>
                <TextInput type="password" value={data.password} onChange={(event) => setData('password', event.target.value)} label="Password" error={errors.password}/>
                <TextInput type="password" value={data.password_confirmation} onChange={(event) => setData('password_confirmation', event.target.value)} label="Password confirmation" error={errors.password_confirmation}/>
                <PinkButton text="Reset password" type="submit"/>
            </form>
        </section>
    );
}

export default ResetPassword;