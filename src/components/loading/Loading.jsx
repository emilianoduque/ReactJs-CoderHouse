import ClipLoader  from "react-spinners/ClipLoader";
import "./loading.scss"

const Loading = () => {

  return (
    <div className="clipLoaderContainer">
    <ClipLoader color="#07caff"
    size={100}/>    
    </div>
  )
}

export default Loading