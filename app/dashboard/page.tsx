// This is how you can create different pages in Next.js: 
// create a new route segment using a folder, and add a page file inside it.
// The page file is a React component that exports a default function.
// This function returns the JSX that will be rendered as the page content.
// Can view the page at http://localhost:3000/dashboard

import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '../ui/dashboard/revenue-chart';
import LatestInvoices from '../ui/dashboard/latest-invoices';
import { lusitana } from '../ui/fonts';
import { revenue } from '../lib/placeholder-data';
import { fetchRevenue, fetchLatestInvoices } from '../lib/data';
 
export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />  {/* revenue is an array of objects. here we are passing it as a prop to RevenueChart component */}
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}