import { useForm, usePage } from "@inertiajs/react";
import TextInput from "../Input";
import PinkButton from "../PinkButton";

function YearModal(){
    const year = usePage().props.year;
    const { data, setData, post, patch, processing, errors } = useForm({
        year: year != null ? year.year : 0,
        fase: year != null ? year.fase : '',
        description: year != null ? year.description : ''
    });
    console.log(usePage().props);
    const submit = (event) => {
        event.preventDefault();
        if(year == null){
            post(route('years.store'));
        }
        else{
            patch(route('years.update', year.id));
        }
    }

    return (
        <>
            <div className="overlay"></div>
            <dialog className="modal" open>
                <form onSubmit={submit} className="modal__form">
                    <h2 className="modal__form--title">Maak nieuw jaar aan</h2>
                    <TextInput value={data.year} onChange={(event) => setData('year', event.target.value)} label="Year" error={errors.year} type="number"/>
                    <TextInput value={data.fase} onChange={(event) => setData('fase', event.target.value)} label="Fase" error={errors.fase}/>
                    <TextInput value={data.description} onChange={(event) => setData('description', event.target.value)} label="Description" error={errors.description}/>
                    <PinkButton type="submit" text="Voeg toe" processing={processing}/>
                </form>
            </dialog>
        </>
    );
}

export default YearModal;