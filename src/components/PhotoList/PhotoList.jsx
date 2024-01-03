import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react'
import Photo from '../Photo/Photo';
import './photolist.css'
function PhotList() {
    const [urlToImage, setUrlToImage] = useState([])
    async function downloadPhotos() {
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20')
        const photoData = response.data.photos;
        console.log('res1',photoData)
        const urlPromises = photoData.map((p) => {
            return {
                id: p.id,
                imgUrls: p.url
            }
        });
        setUrlToImage(urlPromises)


    }
    useEffect(() => {
        downloadPhotos()
    }, [])
    return (
        <div className='img-list-div'>
            {urlToImage.map((x) => <Photo image={x.imgUrls} key={x.imgUrls} id={x.id} />)}
        </div>
    )
}
export default PhotList;


