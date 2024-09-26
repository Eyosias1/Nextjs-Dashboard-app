import  Customer  from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';



export default async function Page() {
    //const customers =  await Promise.all([fetchCustomers()]);
    const customers = await fetchFilteredCustomers('')
    return (
        <main>
            <Customer customers={customers}/>
        </main>
    )
}