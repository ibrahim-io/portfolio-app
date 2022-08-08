import { Link } from "react-router-dom"


const WindowTemplate = ({image, header, link}) => {
  return (
    <div className="template_container">
      <img className='gallery_img' src={image} alt={header}/>
      <h4>{header}</h4>
      <Link to={link}>
        <button>GO!</button>
      </Link>
    </div>
  )
}

export default WindowTemplate