import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../components/Admin/SideBar/AdminSidebar';
import AdminTopbar from '../../components/Admin/TopBar/AdminTopbar';
import { BiDownload } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { all } from 'axios';
import { AdminAllCustomers } from '../../actions/Admin/AdminAction';

const Customers = () => {

  const [customers, setCustomers] = useState(null);
  const [page, setPage] = useState(null);
  const [customersCount, setCustomersCount] = useState(null);
  const allcustomers = useSelector(state => state.admin.customers);
  const allCustomersCount = useSelector(state => state.admin.totalcustomers);

  useEffect(() => {
    if (allcustomers) {
      setCustomers(allcustomers)
    }
    if (allCustomersCount) {
      setCustomersCount(allCustomersCount)
      setPage(allCustomersCount / 10)
    }
  }, [allcustomers, allCustomersCount])

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AdminAllCustomers());
  }, [dispatch])

  return (
    <>
      <div className='flex w-full h-screen'>
        <AdminSidebar name={'customers'} />
        <div className='flex flex-col w-full h-screen '>
          <AdminTopbar />
          <div className='flex flex-col pt-5 pl-5 pr-10'>
            <h1 className='font-dmsans text-lg font-semibold'>Cusotmers</h1>
            <div className='w-full border rounded-lg mt-5 h-20 items-center flex pl-4 pt-4 pb-4'>
              <button className='border h-full w-[100px] rounded-md mr-3 flex justify-center items-center text-sm'><span className='mr-2 rotate-180'><BiDownload size={15} /></span> Export</button>
              <button className='border h-full w-[100px] rounded-md flex justify-center items-center text-sm'><span className='mr-2'><BiDownload size={15} /></span>Import</button>
            </div>
            <div className='w-full border rounded-lg mt-5 h-20 items-center flex pl-4 pt-4 pb-4 pr-5'>
              <input type="text" placeholder='Search by name/email/phone' className='border rounded-lg w-full border-[#1a1a1d45] text-sm h-12 pl-4 active:border-[#1a1a1d45]' />
            </div>
            <div className='flex-col mt-5'>

              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="p-4">
                        ID
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Joining Date
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Phone
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      customers?.map((customer, key) => (
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td class="w-4 p-4">
                            {customer?._id}
                          </td>
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {(customer?.createdAt).split("T")[0]}
                          </th>
                          <td class="px-6 py-4">
                            {customer?.fullname}
                          </td>
                          <td class="px-6 py-4">
                            {customer?.email}
                          </td>
                          <td class="px-6 py-4">
                            +91{customer?.phone}
                          </td>
                          <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
                <nav class="flex items-center justify-between pt-4 pl-3 pr-3 mb-3" aria-label="Table navigation">
                  <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">{customersCount}</span></span>
                  <ul class="inline-flex -space-x-px text-sm h-8">
                    <li>
                      <p class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</p>
                    </li>

                    <li>
                      <p class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</p>
                    </li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Customers