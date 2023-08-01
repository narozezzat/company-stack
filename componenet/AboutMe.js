import styles from "../styles/AboutMe.module.css"
import Image from "next/image"
import img from "../assets/images/photo Formal.jpg"
import Link from "next/link";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

export default function AboutMe() {
  return (
    <>
        <div className="">
          <div className={styles.aboutCountainer}>
          <div className="row my-5">
            <div className="col-sm-12 text-center text-white">
              <h2>Stack Company - part of Stack City</h2>
              <h3><cite>I am Software Engineers, ambitious thinkers, and hardcore football fans.</cite></h3>
              <p>I aim to build platforms and provide services that leave impacts and serve communities everywhere.</p>
            </div>
          </div>
          </div>
        </div>

        <div className="container">
          <div className="row text-center mt-5">
            <div className="col-sm-12">
              <h3 class="stackinfo-about-title">Meet me 👋</h3>
              <p>I am open to Software Engineering internships opportunities. 
              Hiring me will promote your company to the top of the home page.<cite> - Me</cite>
              </p>
            </div>
          </div>
        </div>

        <div className="container text-center d-flex justify-content-center my-5">
          <div className="card " style={{width: "18rem"}}>
            <Image className="card-img-top" src={img} style={{height: "240px"}} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Naroz Ezzat</h5>
              <hr />
              <Link href="https://github.com/" target="_blank" className="mx-4">
                <GithubOutlined />
              </Link>

              <Link href="https://www.linkedin.com/feed/" target="_blank" className="mx-4">
                <LinkedinOutlined />
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row text-center">
            <div className="col-sm-12">
              <h3>Contact us 🤙</h3>
              <p className="mt-4 mb-5">For any issues or casual talk, 
              you can contact me through their <cite>Linkedin</cite>.
              </p>
            </div>
          </div>
        </div>
    </>
  );
}

