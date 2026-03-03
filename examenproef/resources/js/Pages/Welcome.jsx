import YearModal from "@/Components/Modals/YearModal";
import PinkButton from "@/Components/PinkButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

function Welcome({auth}){
    const [isOpen, setIsOpen] = useState(false);
    const years = usePage().props.years;
    const roles = usePage().props.auth.role;
    const {post, processing} = useForm();
    console.log(roles);
    console.log(years);

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    const submit = (event) => {
        event.preventDefault();
        post(route('logout'));
    }
    return(
        <>
        {
            auth.user ? <AuthenticatedLayout>
                user

                <PinkButton text="log out" type="submit" onClick={submit}/>
                

                {
                    roles.find((item) => item.name == 'admin') &&
                <button onClick={() => setIsOpen(!isOpen)}>new year +</button>
                }

                {
                    years.length != 0 &&
                    
                    <section className="home__years">
                        {
                            years.map((item, index) => 
                                <div key={index} className="home__year">
                                    <p className="home__year--title">year {item.year}</p>
                                    <p className="home__year--fase">{item.fase}</p>
                                    <p className="home__year--description">{item.description}</p>
                                    <PinkButton text="Ondek meer -->" route={route('year.show', item.id)}/>
                                </div>
                            )
                        }
                    </section>

                }

                <PinkButton text="Nieuw vak +" route={route('subjects.create')}/>

                {
                    isOpen && <YearModal/>
                }
                
            </AuthenticatedLayout>
            : <GuestLayout>
                guest
                
                {
                    years.length != 0 &&
                    
                    <section className="home__years">
                        {
                            years.map((item, index) => 
                                <div key={index} className="home__year">
                                    <p className="home__year--title">year {item.year}</p>
                                    <p className="home__year--fase">{item.fase}</p>
                                    <p className="home__year--description">{item.description}</p>
                                    <PinkButton text="Ondek meer -->" route={route('year.show', item.id)}/>
                                </div>
                            )
                        }
                    </section>
                }
            </GuestLayout>
        }
        </>
    );
}

export default Welcome;