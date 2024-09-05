import EditFlowers from "@/app/components/admin/editflowers";
import AdminLayout from "@/app/components/layout/adminLayout";
import axios from "axios";
const getData = async (id) => {
  const res = await axios.get(
    `http://localhost:3000/api/flowers/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.data.data;
};
const Edit = async ({ params }) => {
  const { id } = params;
  const flower = await getData(id);
  // console.log(flower)
  return (
    <AdminLayout>
      <EditFlowers flower={flower} id={id}/>
    </AdminLayout>
  )
}
export default Edit