import { Head, useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/Input";
import PinkButton from "@/Components/PinkButton";

function SubjectForm(){
    const subject = usePage().props.subject;
    const teachers = usePage().props.teachers;
    console.log(teachers);
    const { data, setData, post, patch, processing, errors } = useForm({
        name: subject != null ? subject.name : '',
        description: subject != null ? subject.description : '',
        teachers: subject != null ? subject.teachers : []
    });

    const submit = (event) => {
        event.preventDefault();
        if(subject != null){
            patch(route('subjects.update', subject.id));
        }
        else{
            post(route('subjects.store'));
        }
    }

    return (
        <AuthenticatedLayout>
            <Head title={subject != null ? `Edit ${subject.name}` : "Nieuw vak"}/>
            <section>
                <form onSubmit={submit}>
                    <h2>Voeg nieuw vak toe</h2>
                    <TextInput value={data.name} onChange={(event) => setData('name', event.target.value)} label="Naam" error={errors.name} />
                    <TextInput value={data.description} onChange={(event) => setData('description', event.target.value)} label="Description" error={errors.description} /> 
                    <div>
                        <label>docenten</label>
                        <select value="" onChange={(event) => {
                            let item = event.target.value;
                            if(!data.teachers.includes(item)){
                                setData('teachers', [...data.teachers, item]);
                            }
                        }}>
                            <option value="-">-</option>
                            {
                                teachers.map((item, index) => 
                                    <option value={item.name} key={index}>{item.name}</option>
                                )
                            }
                        </select>
                        <span>
                            {
                                data.teachers.map((item, index) => 
                                    <button key={index} type="button" onClick={() => setData('teachers', data.teachers.filter((teacher) => teacher !== item))}>{item}</button>
                                )
                            }
                            {data.teachers}
                        </span>
                    </div>
                    <PinkButton text="Maak aan" type="submit" processing={processing}/>
                </form>
            </section>
        </AuthenticatedLayout>
    );
}

export default SubjectForm;