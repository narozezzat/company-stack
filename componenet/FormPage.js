import styles from "../styles/AboutMe.module.css"


function FormPage() {
  return (
    <>
        <div className="mb-5">
          <div className={styles.aboutCountainer}>
          <div className="row my-5">
            <div className="col-sm-12 text-center text-white">
              <h2>Feature your company on Stack Company✨</h2>
              <p>Use this form to add or update your company is tech stack</p>
            </div>
          </div>
          </div>
        </div>

    </>
  )
}

export default FormPage