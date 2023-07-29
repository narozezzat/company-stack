import Link from "next/link"
import Image from "next/image"
import logo from "../assets/images/logo.png"
import { LinkedinOutlined, TwitterOutlined }  from '@ant-design/icons';


function Footer() {
  return (
    <>
      <div className="footer mt-5 container-fluid bg-light mt-5">
        <div className="justify-content-center pt-3 row">

          <div className="col-md-3 col-sm-12 justify-content-center">
            <Link href="#">
              <Image title="Groove Street, Home" alt="Logo" src={logo}  style={{height: "90px", width: "70px"}}/>
            </Link>

            <div className="flex-row mt-1 mb-2 justify-content-start list-group">

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

          <div className="col-md-3 col-sm-12">
            <h3>Discover</h3>
            <div className="mx-4">
              <Link href="/" className="d-block my-4">Home</Link>
              <Link href="#">Search</Link>
            </div>

          </div>

          <div className="col-md-3 col-sm-12">
            <h3>Who we are</h3>
            <div className="mx-4">
              <Link href="/" className="d-block my-4">About</Link>
              <Link href="#">Privecy</Link>
            </div>

          </div>

          <div className="col-md-3 col-sm-12">
            <h3>Stack Info</h3>
            <div className="my-4">
              <p>Stack Info allows you to explore and find tech
                 stacks used by more than 250 startups and corporates in EMEA 🌠💻
              </p>
            </div>

          </div>


          

          

        </div>
      </div>
    </>
  )
}

export default Footer;