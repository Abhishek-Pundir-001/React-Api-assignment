import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import './photodetail.css'

function PhotoDetails() {
    const { id } = useParams()
    const [photoDetails, setPhotDetails] = useState({})
    async function downloadPhotoDetails() {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        const detailsData = response.data.photo;
        setPhotDetails({
            image: detailsData.url,
            title: detailsData.title,
            description: detailsData.description

        })
        console.log(photoDetails)
    }

    useEffect(() => {
        downloadPhotoDetails()
    }, [])
    return (

        <>
            <Link to={'/'}>
                <h2 className="home">Home</h2>
            </Link>

            <div className="details-div">

                <div className="details-wrapper">
                    <div>
                        <img className="detail-img" src={photoDetails.image} alt="img" />
                    </div>
                    <div className="info-div">
                        <h1 className="img-title">{photoDetails.title}</h1>
                        <p className="img-desc">{photoDetails.description}</p>
                    </div>
                </div>
            </div>
        </>


    )
}
export default PhotoDetails