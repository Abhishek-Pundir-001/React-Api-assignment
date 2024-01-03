import {Routes,Route} from 'react-router-dom'
import PhotoDetails from '../components/Photodetails/PhotoDeatils'
import PhotList from '../components/PhotoList/PhotoList'

function CustomRoutes(){
    return(
<Routes>
    <Route path='/' element={<PhotList />}/>
    <Route path='photos/:id' element={<PhotoDetails />}/>
</Routes>
    )
}
export default CustomRoutes