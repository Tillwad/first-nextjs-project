import { Metadata } from 'next';
import { Suspense } from 'react';
import CustomersTable from '@/app/ui/customers/table';
import { CustomerTableSkeleton } from '@/app/ui/skeletons';
import { fetchCustomersPages, fetchFilteredCustomers } from '@/app/lib/data';
import Pagination from '@/app/ui/invoices/pagination';

export const metadata: Metadata = {
  title: 'Customer',
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string,
    page?: string,
  }
}) 
{

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCustomersPages(query);

  return (
    <main>
      <Suspense fallback={<CustomerTableSkeleton />}>
        <CustomersTable query={query} currentPage={currentPage}/>
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
    )
}