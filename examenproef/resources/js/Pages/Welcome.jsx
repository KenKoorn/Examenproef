import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";

function Welcome({auth}){
    return(
        <>
        {
            auth.user ? <AuthenticatedLayout>
                user
            </AuthenticatedLayout>
            : <GuestLayout>
                guest
            </GuestLayout>
        }
        </>
    );
}

export default Welcome;