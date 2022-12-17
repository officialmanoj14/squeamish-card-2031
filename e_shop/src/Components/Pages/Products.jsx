import { Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";




function ProductPage () {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/products`)
    .then((res) => {
       setData(res.data);
      //  console.log(res.data);
    })
  },[]);


  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data?.length > 0 && data.map((elem) => {
          return (
            <GridItem key={elem.id}>
               <ProductCard
                 category={elem.category}
                 image={elem.image_url}
                 id={elem.id}
                 description={elem.description}
                 title={elem.title }
                 price={elem.price}
                 delivery={elem.delivery}
                 
              />
            </GridItem>
          );
        })}
      </Grid>
    </div>
  )

}


export default ProductPage;
