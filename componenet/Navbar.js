import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.css'
import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import logo from "../assets/images/logo.png"

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow mb-5 bg-white rounded">
        <div className="container-fluid">
          
          <Link className="navbar-brand" href="#">
            <span>
            <Image src={logo} style={{height: "55px", width: "70px"}} alt=""/>
            <span className={styles.stackText}>STACK</span> 
            <span className={styles.infoText}> INFO</span>
            </span>
          </Link>

          <span>
          <button className="navbar-toggler" 
          type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" 
          aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" href="/posts">Posts</Link>
              </li>
            </ul>
          </div> 

          </span>  
        </div>  
      </nav>
    </div>
  ) 
}

export default Navbar