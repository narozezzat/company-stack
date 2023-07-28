import Link from "next/link"
import Image from "next/image"
import logo from "../assets/images/logo.png"
import { LinkedinOutlined, TwitterOutlined }  from '@ant-design/icons';


function Footer() {
  return (
    <>
      <div className="footer mt-5 container-fluid bg-light mt-5 shadow mb-5 bg-white rounded">
        <div className="justify-comtent-center pt-3 row">

          <div className="footer-logo col-md-3 col-sm-4 mx-3">
            <Link href="#">
              <Image title="Groove Street, Home" alt="Logo" src={logo}  style={{height: "90px", width: "70px"}}/>
            </Link>
          </div>

          <div className="flex-row mt-1 mb-2 justify-content-start list-group mx-3">

            <div className="social-media-item border-0 bg-transparent list-group-item">
              <Link href="https://www.twitter.com/stackinfoio" target="_blank" rel="noreferrer">
                <TwitterOutlined />
              </Link>
            </div>

            <div className="social-media-item border-0 bg-transparent list-group-item">
              <Link href="https://www.linkedin.com/company/stackinfoio" target="_blank" rel="noreferrer">
                <LinkedinOutlined />
              </Link>
            </div>

          </div>

          

        </div>
      </div>
    </>
  )
}

export default Footer;