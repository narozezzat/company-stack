import { data } from "../../../data"


export default function handler(req, res) {

    let id = req.query.id;

    let post = data.find(p => p.id == id)
    

    if(post){
        res.status(200).json(post)
    } else {
        res.status(400).json({err: "there is no Data"})
    }
    
  }