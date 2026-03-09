import ModuleModal from "@/Components/Modals/ModuleModal";
import PinkButton from "@/Components/PinkButton";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

function Year(){
    const year = usePage().props.year;
    const roles = usePage().props.auth.role;
    const [isOpen, setIsOpen] = useState(false);
    const modules = usePage().props.modules;

    return (
        <>
            <h1>jaar {year.year}</h1>
            <h3>{year.fase}</h3>
            {
                roles.find((item) => item.name == 'admin') && <PinkButton text="Nieuw module +" onClick={() => setIsOpen(!isOpen)}/>
            }

            {
                modules.length != 0 &&
                <div>
                    {
                        modules.map((item, index) => 
                            <article key={index}>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </article>
                        )
                    }
                </div>
            }

            {
                isOpen && <ModuleModal/>
            }
        </>
    );

}

export default Year;