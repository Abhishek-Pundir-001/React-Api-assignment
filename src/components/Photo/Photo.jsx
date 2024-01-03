import { Link } from 'react-router-dom';
import './photo.css'
function Photo({ image, id }) {
    return (

        <div className='img-div'>
            <Link to={`/photos/${id}`}>
                <img className='img' src={image} alt="img" />
            </Link>
        </div >


    )
}
export default Photo;