import React, { useState } from 'react';
import Message from './Message';

interface ProductDetailProps {
  name: string;
  description: string;
  price: number;
  sku: string;
  quantity: number;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  name,
  description,
  price,
  sku,
  quantity,
}) => {
  const [purchased, setPurchased] = useState(false);

  const handleBuyClick = () => {
    setPurchased(true);
  };

  return (
    <>

            <div className="row g-0">
                <div className="col-md-5">
                <img src="https://images.pexels.com/photos/14541006/pexels-photo-14541006.jpeg" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-7 text-start">
                    <h1 className="display-5 fw-bolder">{name}</h1>
                    <h3 className="fw-bolder">Precio: ${price}</h3>
                    <p className="lead">{description}</p>
                   
                    <p className="leadt">SKU: {sku}</p>
                    <p className="lead">Cantidad disponible</p>
                    <p className="lead">{quantity} Unidad/es</p>
                   
                    <div className="d-grid gap-2 d-md-block">
                                <button onClick={handleBuyClick} className="btn btn-primary">
                                    Comprar
                                </button>
                            </div>
                            {purchased && <Message/>}
                    
                </div>
        </div>

    </>
  );
};

export default ProductDetail;