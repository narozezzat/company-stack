
import styles from "../styles/Navbar.module.css"

function Information() {
  return (
    <div className="container">
        <div className="container row mt-4 justify-content-end">

            <div className="col-md-6 col-sm-12">
                <h1 className={styles.mainColor1}> 
                    To building a large community of developers and software engineers in EMEA to empower their abilities.
                </h1>
                <p>Stack Info allows you to explore and find tech stacks used by more than 250 startups and corporates in EMEA 🌠💻</p>
            </div>
            
            <div className="col-md-6 col-sm-12">
                <h1 className={styles.mainColor2}>Let is feature your organization here on Stack Info!</h1>
                <p>Start by simply adding your organization is details and include the technology stack you use, and get featured on one of the most interesting tech platforms in Egypt!</p>
                <button className="btn get-started-outline border border-dark">Get Started</button>
            </div>

        </div>
    </div>
  )
}

export default Information