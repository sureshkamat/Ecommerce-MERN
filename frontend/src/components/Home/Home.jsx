import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FaMouse } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../action/productAction';
import { Loader } from '../layout/Loader/Loader';
import { Product } from './Product';
import './home.css';
import {useAlert} from 'react-alert';
export const Home = () => {
  const dispatch = useDispatch();
  const { loading, products, productsCount, error } = useSelector(state => state.products);
  const alert=useAlert();

  useEffect(() => {
   if(error){
    return alert.error(error);
   }
     dispatch(getProducts());
  }, [dispatch,error,alert]);
  return (
    <>
    {loading?<Loader />:
    <>
    <Helmet title="Sursha Lifestyle" />
    <div className="banner">
      <p>Welcome to Sursha Lifestyle</p>
      <h1>Find Amazing Products Below</h1>
      <a href='#container'>
        <button>
          Scroll <FaMouse />
        </button>
      </a>
    </div>
    <h2 className='homeHeading'>Featured Products</h2>
    <div className='container' id='container'>
      {products && products.map((product) => (
        <Product product={product} />
      ))}

    </div>
  </>
  }
    </>
  )
}
