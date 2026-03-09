import { useForm, usePage } from "@inertiajs/react";
import TextInput from "../Input";
import PinkButton from "../PinkButton";

function ModuleModal(){
    const year = usePage().props.year;
    console.log(year);
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        image: ''
    });

    const submit = (event) => {
        event.preventDefault();
        post(route('module.store', year));
    }

    return (
        <>
            <div className="overlay"></div>
            <dialog className="modal" open>
                <form onSubmit={submit} className="modal__form">
                    <h2 className="modal__form--title">Maak nieuwe module aan</h2>
                    <TextInput value={data.name} onChange={(event) => setData('name', event.target.value)} label="Name" error={errors.name}/>
                    <TextInput value={data.description} onChange={(event) => setData('description', event.target.value)} label="Description" error={errors.description}/>
                    <TextInput value={data.image} onChange={(event) => setData('image', event.target.value)} label="Image" error={errors.image}/>
                    <PinkButton text="Maak aan" type="submit" processing={processing}/>
                </form>
            </dialog>
        </>
    );
}

export default ModuleModal;