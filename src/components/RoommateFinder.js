import { Link } from "react-router-dom"
const RoommateFinder = () => {
  return (
    <div>
      <Link to='/gallery'>
        <button className='btn neonText prj_btn'>&larr; Back</button>
      </Link>
      <h1 className='prj_header'>Roommate Finder App</h1>
      <div className='text_container'>
        <p>&rarr; In this project, I participated as part of a group to build a <span className="neonText">web app </span>which was 
            designed to help students to find <span className="neonText">compatible </span>roommates</p>
        <p>&rarr; We had to <span className="neonText">iteratively</span> improve on our touchpoint after getting feedback from students</p>
        <p>&rarr; Although this project allowed me to hone my React skills in general, I also learnt a lot about how <span className="neonText">Human Centered Design </span>works</p>
      </div>
      <p className='gist_redirect'><a className='neonText' href='https://github.com/tahmid148/drp-finding-roommates' target='_blank' rel='noreferrer'>Go to Repo &rArr;</a></p>
    </div>
  )
}

export default RoommateFinder