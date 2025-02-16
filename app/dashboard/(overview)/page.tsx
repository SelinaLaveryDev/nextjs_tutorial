// This is how you can create different pages in Next.js: 
// create a new route segment using a folder, and add a page file inside it.
// The page file is a React component that exports a default function.
// This function returns the JSX that will be rendered as the page content.
// Can view the page at http://localhost:3000/dashboard

import RevenueChart from '../../ui/dashboard/revenue-chart';
import LatestInvoices from '../../ui/dashboard/latest-invoices';
import { lusitana } from '../../ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';

 
export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />} >
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />  
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />} >
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}