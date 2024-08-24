import React, { useContext } from 'react'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/Relatedproducts/RelatedProducts';

export default function Product() {
  const {allProduct} = useContext(ShopContext);
  const{productId} = useParams();
  const product = allProduct.find((e)=> e.id === Number(productId))
  return (
    <div className='product'>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts/>
    </div>
  )
}
