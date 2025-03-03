// Here, we are importing the <SideNav /> component into your layout.tsx file.
// Any components imported into this layout.tsx file will be part of the layout.

import SideNav from "@/app/ui/dashboard/sidenav";
export const experimental_ppr = true; // added this line to enable PPR mode for all pages in the application

/* This child can either be a page or another layout. 
In this case, the pages inside /dashboard will automatically be nested inside a <Layout /> */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
