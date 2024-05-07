import { loading } from "../assets";

const Generating = () => {
  return (
    <div>
      <img src={loading} alt='Loading' className="w-5 h-5 mr-4" />
      AI is generating 
    </div>
  )
}

export default Generating;
