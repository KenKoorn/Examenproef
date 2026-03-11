import LessonModal from "@/Components/Modals/LessonModal";
import ModuleModal from "@/Components/Modals/ModuleModal";
import SubjectModal from "@/Components/Modals/SubjectModal";
import YearModal from "@/Components/Modals/YearModal";
import PinkButton from "@/Components/PinkButton";
import SubjectItem from "@/Components/SubjectItem";
import Timeline from "@/Components/Timeline";
import { Head, usePage } from "@inertiajs/react";
import { useState } from "react";

function Year() {
    const year = usePage().props.year;
    const user = usePage().props.auth.user;
    const roles = usePage().props.auth.role;
    const [isOpen, setIsOpen] = useState(false);
    const modules = usePage().props.modules;
    const subjects = usePage().props.subjects;
    const [openForm, setOpenForm] = useState(null);
    console.log(usePage().props);
    console.log(openForm);
    const backgroundUrl =
        "https://welkombijma.nl/wp-content/uploads/2023/05/SD-scaled.jpg"; // Pas dit pad aan naar jouw afbeelding
    const [openModule, setOpenModule] = useState(null);
    return (
        <>
            <Head title="Jaar 1" />
            <div
                className="jaar1"
                style={{ backgroundImage: `url(${backgroundUrl})` }}
            >
                {
                    user != null &&
                    <>
                        <PinkButton text="edit jaar" onClick={() => setOpenForm('year')} />
                        <PinkButton text="new module" onClick={() => setOpenForm('module')} />
                        <PinkButton text="new vak" onClick={() => setOpenForm('subject')} />
                        <PinkButton text="new lessonplan" onClick={() => setOpenForm('lessonplan')} />
                        <a href={route('subjects.create')}>subject</a>
                    </>
                }

                <Timeline/>

                {
                    modules.map((module, index) => 
                        <div className="content-card" key={index}>
                            <PinkButton text="edit module" onClick={() => setOpenForm(module.id)} />
                            <div className="module">
                                <h2>{module.name}</h2>
                                {/* <p className="subtitle">Oriëntatie fase</p> */}
                                <p>{module.description}</p>
                            </div>
                            <div className="image">
                                <img src={module.image} alt={module.name} />
                            </div>

                            <div className="vakken-section">
                                <h2 onClick={() => setOpenModule(openModule === 1 ? null : 1)}>
                                    Vakken {openModule === 1 ? "▲" : "▼"}
                                </h2>

                                {openModule === 1 && (
                                    <div className="vakken-grid">

                                        {
                                            subjects.map((subject, index) => 
                                                <SubjectItem title={subject.name} key={index}>
                                                    <ul>
                                                        {
                                                            module.lesson_plans.filter((item) => 
                                                                item.subject.id == subject.id
                                                                ).map((lesson, index) => <li key={index}>{lesson.name}</li>
                                                            )
                                                        }
                                                    </ul>
                                                </SubjectItem>
                                            )
                                        }
                                    </div>
                                )}
                            </div>
                            <PinkButton text="Terug naar home" route={route('home.index')}/>
                        </div>
                    )
                }
            </div>

            {
                openForm != null ? 
                openForm == 'lessonplan' && <LessonModal/>
                || openForm == 'module' && <ModuleModal/>
                || openForm == parseInt(openForm) && <ModuleModal id={openForm}/>
                || openForm == 'year' && <YearModal/>
                || openForm == 'subject' && <SubjectModal/> : null
            }

        </>
    );

}

export default Year;