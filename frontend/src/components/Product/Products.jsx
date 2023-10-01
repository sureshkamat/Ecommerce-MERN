import React, { useEffect ,useState} from 'react'
import "./Products.css";
import { useDispatch, useSelector } from 'react-redux';
import { clearError, getProducts } from '../../action/productAction';
import { Loader } from '../layout/Loader/Loader';
import { ProductCard } from '../Home/ProductCard';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const Products = () => {
  const dispatch=useDispatch();
  const {loading,products,error,productsCount,totalPages}=useSelector(state=>state.products);
  const [currentPage,setCurrentPage]=useState(1);
  const { keyword} = useParams();

  useEffect(()=>{
   dispatch(getProducts(keyword,currentPage));
  },[dispatch,keyword,currentPage])

  return (
    <>
    {loading?<Loader />:
    <>
    <h2 className="productHeading">Products</h2>
    <div className='products'>
      {
        products.map((product)=>(
          <ProductCard key={product._id} product={product} />
        ))
      }
    </div>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="10vh"
    >
    <Stack spacing={2} direction="row" >
      <Button variant="outlined" onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===1} >Prev</Button>
      <Button variant="outlined">{currentPage}</Button>
      <Button variant="outlined" onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===totalPages}>Next</Button>
    </Stack>
    </Box>
    </>
    }
    </>
  )
}
