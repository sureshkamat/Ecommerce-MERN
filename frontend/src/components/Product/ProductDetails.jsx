import React, { useEffect ,useState} from 'react';
import Carousel from 'react-material-ui-carousel';

import ReactStars from 'react-rating-stars-component';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearError, getProductDetails } from '../../action/productAction';
import "./productDetails.css";
import { ReviewCard } from './ReviewCard';
import { Loader } from '../layout/Loader/Loader';
import {useAlert} from 'react-alert';
import { MetaData } from '../layout/MetaData';
import { addItemsToCart } from '../../action/cartAction';



export const ProductDetails = () => {
    const [quantity,setQuantity]=useState(1);
    const dispatch = useDispatch();
    const { id } = useParams();
    const alert=useAlert();
    const { product, loading, error } = useSelector(state => state.productDetails)
    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch(clearError())
           }
        dispatch(getProductDetails(id))

    }, [dispatch, id,error,alert])

    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth > 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true

    }
    const decQuantity=()=>{
        if(1<=quantity) return;
        setQuantity(quantity-1);
    }
    const incQuantity=()=>{
        if(product.stock<=quantity) return;
        setQuantity(quantity+1);
    }
    const addtoCartHandler=(id)=>{
        dispatch(addItemsToCart(id,quantity));
        alert.success("Item added to Cart");
    }
    return (
        <>
            {loading ? (<Loader />) : (
                <>
                <MetaData title={`${product.name} --Sursha Lifestyle`} />
                    <div className="productDetails">
                        <div className='left'>
                            <Carousel >
                                {product.images &&
                                    product.images.map((item, i) => (
                                        <img
                                            className='carouselImage'
                                            key={item.url}
                                            src={item.url}
                                            alt={`${i} Slide`}
                                        />
                                    ))}
                            </Carousel>
                        </div>
                        <div className='right'>
                            <div className='detailBlock-1'>
                                <h2>{product.name}</h2>
                                <p>Product # {product._id}</p>
                            </div>
                            <div className='detailBlock-2'>
                                <ReactStars {...options} />
                                <span>({product.numOfReviews} Reviews)</span>
                            </div>
                            <div className='detailBlock-3'>
                                <h1>{`RS.${product.price}`}</h1>
                                <div className='detailBlock-3-1'>
                                    <div className='detailBlock-3-1-1'>
                                        <button onClick={decQuantity} disabled={quantity===1}>-</button>
                                        <input readOnly type="Number" value={quantity} />
                                        <button onClick={incQuantity}>+</button>
                                    </div>
                                    <button onClick={() => addtoCartHandler(product._id)}>Add to Cart</button>
                                </div>
                                <p>Status:
                                    <b className={product.Stock < 1 ? "redColor" : "greenColor"} >
                                        {product.Stock < 1 ? "OutOfStock" : "InStock"}
                                    </b>
                                </p>
                            </div>
                            <div className='detailBlock-4'>
                                Description:<p>{product.description}</p>
                            </div>
                            <button className='submitReview'>Submit Review</button>
                        </div>
                    </div>
                    <h3 className='reviewHeading'>Reviews</h3>

                    {product.reviews && product.reviews[0] ? (
                        <div className='reviews'>
                            {product.reviews &&
                                product.reviews.map((review) => <ReviewCard review={review} />)}
                        </div>
                    ) : (
                        <p className='noReviews'>No Reviews Yet</p>
                    )}
                </>
            )}
        </>
    )
}
