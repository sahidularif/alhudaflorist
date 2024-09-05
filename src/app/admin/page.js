import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AdminLayout from "../components/layout/adminLayout";
import Flowers from "./flowers/page";

const Admin = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
    if (!session || !session.user) redirect("/auth/login");
  return (
    <html>
        <body className="">
            <main className="">
                <AdminLayout>
                    <Flowers/>
                </AdminLayout>
            </main>
        </body>
    </html>
)

};

export default Admin;