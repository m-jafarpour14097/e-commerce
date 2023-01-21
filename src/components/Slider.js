
import { sliderImages } from '../utils/images'

const Slider = () => {
  return (
    <>
     <div id="carouselExampleSlidesOnly" className="carousel slide border border-secondary-subtle" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={sliderImages[0]} className="d-block w-100 pic" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={sliderImages[1]} className="d-block w-100 pic" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-dark">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={sliderImages[2]} className="d-block w-100 pic" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={sliderImages[3]} className="d-block w-100 pic" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Fourth slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Slider