import { SearchOutlined } from "@ant-design/icons"
import { Button, Input } from 'antd';

const { Search } = Input;

function SearchPage() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 border bg-info rounded-3">
                    <div className="pt-3 h5" style={{fontWeight: "bold"}}>
                        Looking for a specific company? You came to the right place!
                    </div>
                    <p>You can search for a company that you want to work at and discover its stack 😵 You 
                        can discover all companies that start with a specific pattern. If you typed a, 
                        all companies that start with letter A will appear like Affectiva, adam.ai...etc
                    </p>
                </div>
            
                <div className="col-sm-6 border bg-info rounded-3"> 
                    <div className="pt-3 h5 " style={{fontWeight: "bold"}}>
                        Looking for a specific stack? As always, you came to the right place!
                    </div>
                    <p>
                    You can select the stacks you desire from the dropdown like React.js, Node.js, 
                    Express.js...etc And all companies that work with this stack will appear below.<br />
                    🎓 → This company offers undergraduate internships.<br />
                    🗺️ → This company supports remote job vacancies.<br />
                    ✈️ → This company supports relocation and visa sponsorship.
                    </p>
                </div>
            </div>
        </div>

        <div className="container border my-5 rounded-3">
            <div className="row">
                <div className="col-md-12 col-sm-12 my-5">
                    <form>
                        {/* <Button icon={<SearchOutlined />} href="#" /> */}
                        {/* <input type="text" className="w-75"></input>
                        <Button icon={<SearchOutlined />}>Search</Button> */}
                        <Search placeholder="input search text" enterButton="Search" size="large" loading />
                    </form>
                </div>
            </div>
        </div>
    </>

    
  )
}

export default SearchPage