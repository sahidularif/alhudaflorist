import Footer from "../Footer"
import Navbar from "../navbar"

const PageLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
export default PageLayout