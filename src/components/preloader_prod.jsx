import React from 'react'
import '../css/card_prods.css';

const PreloaderProd = (props) => {


    let p = 0;
    return (
        <section className="anim d-flex gap-3">
            <div style={{ width: '10rem' }} className="anim">
                <div style={{ height: '10rem', width: '10rem', background: '#FFDF77' }} className="anim rounded-2 px-3 my-3 mx-auto">
                </div>

                <div className="corpo-lojas text-start">

                    <div className='precos d-flex justify-content-between mt-1'>

                        <div style={{ background: '#FFDF77', width: '6rem' }} className="rounded-1"></div>

                        {/* <button style={{height:'2em'}} className="d-flex btn-carrinho-p">
                            <span onClick={() => remover(item)}>-</span><span className='mx-3'>{item.qty}</span><span onClick={() => adicionar(item)}>+</span>
                          </button> */}
                        <button style={{ background: '#FFDF77', border: 'none', height: '1.8rem', width: '3.5rem' }} className="rounded-1 fw-normal text-danger f-14"> </button>
                    </div>
                </div>
            </div>
            <div style={{ width: '10rem' }} className="anim mx-2">
                <div style={{ height: '10rem', width: '10rem', background: '#FFDF77' }} className="anim rounded-2 px-3 my-3 mx-auto">
                </div>

                <div className="corpo-lojas text-start">

                    <div className='precos d-flex justify-content-between mt-1'>

                        <div style={{ background: '#FFDF77', width: '6rem' }} className="rounded-1"></div>

                        {/* <button style={{height:'2em'}} className="d-flex btn-carrinho-p">
                                <span onClick={() => remover(item)}>-</span><span className='mx-3'>{item.qty}</span><span onClick={() => adicionar(item)}>+</span>
                              </button> */}
                        <button style={{ background: '#FFDF77', border: 'none', height: '1.8rem', width: '3.5rem' }} className="rounded-1 fw-normal text-danger f-14"> </button>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default PreloaderProd;
