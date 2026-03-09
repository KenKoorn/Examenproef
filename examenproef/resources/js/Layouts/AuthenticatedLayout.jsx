import { usePage } from "@inertiajs/react";

function AuthenticatedLayout({children}){
    const user = usePage().props.auth.user;
    return(
        <>
            <main className="main">{children}</main>
        </>
    );
}

export default AuthenticatedLayout;