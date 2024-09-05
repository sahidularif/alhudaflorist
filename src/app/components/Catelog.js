"use client"
import { useEffect, useState } from "react"
import { Tabs } from "./TabComponents/tabs"
import Loader from "./loader"
import axios from "axios"
import { products } from "@/utils/dummyData"

const Catelog = () => {
    const [loading, setLoding] = useState(true)
    const [flowers, setFlowers] = useState([])
    const fetchData = async () => {
        try {
            console.log('try')
            const response = await axios.get('http://localhost:3000/api/flowers')
            console.log(response)
            setLoding(false)
            setFlowers(response.data.data)
        } catch (error) {
            setLoding(true)
            setFlowers("Data not found")
        }
    }
    // fetchData()
    useEffect(() => {
        fetch('http://localhost:3000/api/flowers')
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setFlowers(data.data)
            setLoding(false)
          })
      }, [])
    const tabData = [
        // { id: 1, label: "Orchids", data: flowers && flowers.filter(item => item.category === 'Orchids') },
        { id: 1, label: "Bouquet", data: flowers && flowers.filter(item => item.category === 'Bouquet') },
        { id: 2, label: "Occasion ", data: flowers && flowers.filter(item => item.category === 'Occasion') },
        { id: 3, label: "Ballon decoration", data: flowers && flowers.filter(item => item.category === 'Ballon') },
        { id: 4, label: "Basket/Gift wrapping", data: flowers && flowers.filter(item => item.category === 'Basket') },
        { id: 5, label: "New Born Baby", data: flowers && flowers.filter(item => item.category === 'NewBornBaby') },
        { id: 6, label: "Mixed Plants", data: flowers && flowers.filter(item => item.category === 'Plants') },
    ];
    console.log(flowers)
    return (
        <div className="bg-white pt-16">
            <div className="max-w-xl flex flex-col justify-center mb-2 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="parisienne-regular px-3 py-px mb-4 text-3xl text-center font-semibold tracking-wider text-[#0c5b47] rounded-full bg-teal-accent-400">
                        Our Favourites
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-[#E6BE8A] sm:text-4xl md:mx-auto">
                    Featured Product
                </h2>
            </div>
            {
                loading ? (
                    <Loader />
                )
                    :
                    (
                        <Tabs tabData={tabData} listing={products} />
                    )
            }
        </div>
    )
}
export default Catelog