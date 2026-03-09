import LessonModal from "@/Components/Modals/LessonModal";
import ModuleModal from "@/Components/Modals/ModuleModal";
import PinkButton from "@/Components/PinkButton";
import SubjectItem from "@/Components/SubjectItem";
import { Head, usePage } from "@inertiajs/react";
import { useState } from "react";

function Year() {
    const year = usePage().props.year;
    const roles = usePage().props.auth.role;
    const [isOpen, setIsOpen] = useState(false);
    const modules = usePage().props.modules;
    const subjects = usePage().props.subjects;
    const [openForm, setOpenForm] = useState(null);
    console.log(usePage().props);
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
                <PinkButton text="new lessonplan" onClick={() => setOpenForm('lessonplany')} />

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="circle"></div>
                        <p>Module 1</p>
                    </div>

                    <div className="timeline-item">
                        <div className="circle"></div>
                        <p>Module 2</p>
                    </div>

                    <div className="timeline-item">
                        <div className="circle"></div>
                        <p>Module 3</p>
                    </div>

                    <div className="timeline-item active">
                        <div className="circle"></div>
                        <p>Voortgangsgesprek</p>
                    </div>
                </div>

                {
                    modules.map((module, index) => 
                        <div className="content-card" key={index}>
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
                openForm != null ? openForm == 'lessonplan' && <LessonModal/> : null
            }

        </>
    );

}

export default Year;