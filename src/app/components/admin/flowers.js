"use client"
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const FilterComponent = ({ filterText, onFilter, onClear }) => (

    <>
        <div hidden className="md:block">
            <div className="relative flex items-center py-2.5 text-gray-400 focus-within:text-cyan-400">
                <span className="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3">
                    <svg
                        xmlns="http://ww50w3.org/2000/svg"
                        className="w-4 fill-current"
                        viewBox="0 0 35.997 36.004"
                    >
                        <path
                            id="Icon_awesome-search"
                            data-name="search"
                            d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                        ></path>
                    </svg>
                </span>
                <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    value={filterText}
                    onChange={onFilter}
                    className="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-cyan-300"
                />
            </div>
        </div>
    </>
);
const deleteFlower = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/flowers/${id}`)
    return res.status
}
export default function AllFlowers() {
    const { data } = useSession();
    const router = useRouter();
    const [deletedFile, setDeletedFile] = useState("")
    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteFlower(id)
                    .then((res) => {
                        router.refresh()
                        getFlowers()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                    )
                    .catch((err) => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Flower has not been deleted",
                            icon: "success"
                        });
                        throw new Error("Flower has not been deleted")
                    })

            }
        });

    }

    const columns = [
        {
            name: 'Image',
            selector: row => row.image,
            cell: row => (
                <img src={row.image} alt={row.title} height={80} width={80} />
            )
        },
        {
            name: 'Name',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true,
        },
        {
            name: 'Action',
            cell: row => (
                <div className="justify-between gap-3 flex flex-row">
                    <Link className="" href={`/admin/editflowers/${row.id}`}><i className="fa-duotone fa-solid fa-pen-to-square"></i></Link>
                    <span className="cursor-pointer" onClick={() => handleDelete(row.id)}><i className="fa-duotone fa-solid fa-trash"></i></span>
                </div>
            ),
        },
    ];
    console.log(deletedFile)
    // if (status !== "authenticated") {
    //   router.push("/login");
    // }
    const [flowers, setFlowers] = useState([])

    const getFlowers = async () => {
        const res = await axios.get('http://localhost:3000/api/flowers')
        setFlowers(res.data.data)
        console.log(res.data.data)
    }
    useEffect(() => {
        getFlowers()

    }, [0])
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = flowers.filter(item => item.category && item.category.toLowerCase().includes(filterText.toLowerCase()));


    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);
    return (
        <section className="container bg-white px-4 mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800">Flowers</h2>

                    <span className="px-3 py-1 text-xs text-black bg-[#FAFAD2] rounded-full">{flowers.length} flowers</span>
                </div>

            </div>

            <DataTable
                title=""
                columns={columns}
                data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                selectableRows
                persistTableHead
            />
            {/* <div className="flex items-center justify-between mt-6">
                <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>

                    <span>
                        previous
                    </span>
                </a>

                <div className="items-center hidden md:flex gap-x-3">
                    <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md bg-blue-100/60">1</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">2</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">3</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">...</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">12</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">13</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">14</a>
                </div>

                <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                    <span>
                        Next
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div> */}
        </section>
    )
}