
import styles from "../styles/Navbar.module.css"

function Information() {
  return (
    <div className="container">
        <div className="container row mt-4 justify-content-end">

            <div className="col-md-6 col-sm-12">
                <h1 style={{ color: "#5C18F7", fontWeight: "bold" }}> 
                    To building a large community of developers and software engineers in EMEA to empower their abilities.
                </h1>
                <p>Stack Info allows you to explore and find tech stacks used by more than 250 startups and corporates in EMEA 🌠💻</p>
            </div>
            
            <div className="col-md-6 col-sm-12">
                <h1 className="" style={{ color: "#F472B6", fontWeight: "bold" }}>Let's feature your organization here on Stack Info!</h1>
                <p>Start by simply adding your organization's details and include the technology stack you use, and get featured on one of the most interesting tech platforms in Egypt!</p>
                <button className="btn get-started-outline" style={{color: "#F472B6", border: "solid 1px"}}>Get Started</button>
            </div>

        </div>
    </div>
  )
}

export default Information