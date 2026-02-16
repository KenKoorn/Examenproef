import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";

function Welcome({auth}){
    return(
        <>
        {
            auth.user ? <AuthenticatedLayout>
                
            </AuthenticatedLayout>
            : <GuestLayout>
                
            </GuestLayout>
        }
        </>
    );
}

export default Welcome;