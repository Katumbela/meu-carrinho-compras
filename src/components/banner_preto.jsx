import '../App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function BannerPreto({children}) {
  return (
    <div style={{background: '#FFF8B9', color: 'red'}} className=" text-start text-danger px-3 w-100 py-1 mt">
     <div className="d-flex">
      <i className="bi bi-arrow-back"></i>
     <h4 className='fw-normal text-danger my-auto'>{children}</h4>
     </div>
    </div>
  );
}

export default BannerPreto;
