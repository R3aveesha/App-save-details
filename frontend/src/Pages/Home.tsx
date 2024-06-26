import ImageGallery from '../Components/ImageGallery'
import Navbar from '../Components/Navbar'
import UploadForm from '../Components/UploadForm'

function Home() {
  return (
    <div style={{alignItems:'center'}}>
        <Navbar></Navbar>
        <UploadForm></UploadForm>
        <ImageGallery></ImageGallery>
    </div>
  )
}
export default Home