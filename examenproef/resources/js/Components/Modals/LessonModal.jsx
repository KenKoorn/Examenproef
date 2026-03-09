import { useForm, usePage } from "@inertiajs/react";
import TextInput from "../Input";
import PinkButton from "../PinkButton";

function LessonModal(){
    const module = usePage().props.modules[0];
    const subjects = usePage().props.subjects;
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        subject_id: 0,
        module_id: module.id
    });

    const submit = (event) => {
        event.preventDefault();
        post(route('lessonPlans.store'));
    }

    return (
        <>
            <div className="overlay"></div>
            <dialog className="modal" open>
                <form onSubmit={submit} className="modal__form">
                    <h2 className="modal__form--title">Maak nieuw lessenplan</h2>
                    <TextInput value={data.name} onChange={(event) => setData('name', event.target.value)} label="Naam" error={errors.name} />
                    <TextInput value={data.description} onChange={(event) => setData('description', event.target.value)} label="Description" error={errors.description} />
                    <label>vak</label>
                    <select onChange={(event) => setData('subject_id', event.target.value)}>
                        <option value="-">-</option>
                        {
                            subjects.map((item, index) => 
                                <option value={item.id} key={index}>{item.name}</option>
                            )
                        }
                    </select>
                    <PinkButton text="Maak aan" type="submit" processing={processing}/>
                </form>
            </dialog>
        </>
    );
}

export default LessonModal;