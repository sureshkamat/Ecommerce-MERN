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
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';


export const Products = () => {
  const dispatch=useDispatch();
  const {loading,products,error,productsCount,resultPerPage,totalPages}=useSelector(state=>state.products);
  const [currentPage,setCurrentPage]=useState(1);
  const { keyword} = useParams();
 const [price,setPrice]=useState([0,25000]);

const categories=["Mens","Womens","Kids","Home & Kitchen","Beauty & Health","Bags","Footware","Electronics"]
const [category,setCategory]=useState("");

 const priceHandler=(event,newPrice)=>{
  setPrice(newPrice);
 }
  useEffect(()=>{
   dispatch(getProducts(keyword,currentPage,price,category));
  },[dispatch,keyword,currentPage,price,category])

  return (
    <>
    {loading?<Loader />:
    <>
    <h2 className="productHeading">Products</h2>
    <div className='products'>
      {
        products.length>0?(products.map((product)=>(
          <ProductCard key={product._id} product={product} />
        ))):"NO More Products GO Back"
      }
    </div>
    <div className="filterBox">
      <Typography>Price</Typography>
      <Slider
      value={price}
     onChange={priceHandler}
     valueLabelDisplay="auto"
     aria-labelledby="range-slider"
     min={0}
     max={25000}
/>
<Typography>Category</Typography>
<ul className='categoryBox'>
  {categories.map((category)=>(
    <li 
     className='categorylink'
     key={category}
    onClick={()=>setCategory(category)}
    >
{category}
    </li>
  ))}
</ul>
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
      <Button variant="outlined" onClick={()=>setCurrentPage(currentPage+1)} disabled={products.length===0}>Next</Button>
    </Stack>
    </Box>
    </>
    }
    </>
  )
}
