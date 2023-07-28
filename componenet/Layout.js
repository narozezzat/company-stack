import Footer from "./Footer";
import Information from "./Information";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <>
        <Navbar />
        {props.children}
        <Footer />
    </>
  )
}
