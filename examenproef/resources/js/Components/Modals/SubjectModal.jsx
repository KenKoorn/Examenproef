import { useForm } from "@inertiajs/react";
import TextInput from "../Input";

function SubjectModal(){
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        teachers: []
    });

    const submit = (event) => {
        event.preventDefault();
        post(route('subject.store'));
    }

    return (
        <>
            <div className="overlay"></div>
            <dialog className="modal" open>
                <form onSubmit={submit} className="modal__form">
                    <h2 className="modal__form--title">Voeg nieuw vak toe</h2>
                    <TextInput value={data.name} onChange={(event) => setData('name', event.target.value)} label="Naam" error={errors.name} />
                    <TextInput value={data.description} onChange={(event) => setData('description', event.target.value)} label="Description" error={errors.description} />
                    
                </form>
            </dialog>
        </>
    );
}

export default SubjectModal;