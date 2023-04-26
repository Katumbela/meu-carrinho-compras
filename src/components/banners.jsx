import Carousel from 'react-bootstrap/Carousel';
import '../css/banners.css';
import b1 from '../imgs/pub.png';
import b2 from '../imgs/pub.png';
import pub1 from '../imgs/pub1.png';
import pub2 from '../imgs/pub2.png';
import pub3 from '../imgs/pub3.png';
import pub4 from '../imgs/pub4.jpg';
import pub5 from '../imgs/pub5.png';
import cat1 from '../imgs/im3.png';
import cat2 from '../imgs/frutas-vermelhas_1214788639.png';
import cat3 from '../imgs/p2.png';
import cat4 from '../imgs/p4.png';
import cat5 from '../imgs/im16.png';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Banners() {
  return (
    <>
    <Carousel>
    <Carousel.Item className="carousel  py-auto ">
     
      <img src={b1} alt="banner publicidade" className='w-100' />
     <Carousel.Caption>
      {/* <h1>Publicacao</h1> */}
     </Carousel.Caption>
    </Carousel.Item>
      <Carousel.Item className="carousel  py-auto ">
       
        <img src={b2} alt="banner publicidade" className='w-100' />
       <Carousel.Caption>
        {/* <h1>Publicacao</h1> */}
       </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel  py-auto ">
       
        <img src={b1} alt="banner publicidade" className='w-100' />
       <Carousel.Caption>
        {/* <h1>Publicacao</h1> */}
       </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    <div className="px-2 py-1">
      
    <OwlCarousel className='owl-theme bans' navClass={['owl-prev','owl-next']} margin={15} responsiveClass={false}  dots={false} autoWidth={true} nav={false}>

<div className="item my-2">
    <div className="card_curso">
        <div className="card-header">
            <img src={pub1} alt="Imagem de exemplo" />
        </div>
    </div>
</div>

<div className="item my-2">
    <div className="card_curso">
        <div className="card-header">
            <img src={pub2} alt="Imagem de exemplo" />
        </div>
    </div>
</div>

<div className="item my-2">
    <div className="card_curso">
        <div className="card-header">
            <img src={pub3} alt="Imagem de exemplo" />
        </div>
    </div>
</div>
<div className="item my-2">
    <div className="card_curso">
        <div className="card-header">
            <img src={pub4} alt="Imagem de exemplo" />
        </div>
    </div>
</div>
<div className="item my-2">
    <div className="card_curso">
        <div className="card-header">
            <img src={pub5} alt="Imagem de exemplo" />
        </div>
    </div>
</div>

</OwlCarousel>
<br />
<div className="d-flex gap-3 flex-wrap cats">
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat1} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat2} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat3} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat4} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat5} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat3} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat5} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat5} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat5} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat5} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
</div>
    </div>

    <br />
    </>
  );
}

export default Banners;
