// PageDetail.tsx
import ProductDetail from '../ProductDetail';

const PageDetail = () => {
  return (
    <>
        <div className="container">
           <div>Detalles de producto</div>

            <ProductDetail
            name="Producto 1"
            description="Descripción del producto"
            price={100}
            sku="ABC123"
            quantity={10}
            />
        </div>
   
    </>
  );
};

export default PageDetail;
