import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../store';
import Card from "../../componant/prodcut-card/index"
import "./search.css"
import Reload from "../../componant/reload/index"
function SearchInput() {
  
    // the array that has data from store page
  
    const {searchProduct , setSearchProduct , setLoading , loader} = useContext(GlobalContext);

    //**************************** fetch search value from url *********************************************************

    const searchValue = useParams();

    //******************************* function to fetch Api when wo do search and return product ***********************

    async function FilterSearchInput(){
        const Url_SearchByInput = `https://dummyjson.com/products/search?q=${searchValue.value}`;
        const res = await fetch(Url_SearchByInput);
        const data = await res.json();
        if(data?.products){
          setSearchProduct(data?.products);
          setLoading(false)
        }
        
      }

      useEffect(()=>{
        FilterSearchInput()
      },[searchValue.value])
    
      //**************************** if data not fetch do reload until data download*************************************

      if(loader){
        return(
          <Reload/>
        )
      }

    //*************************************************************************************************************************
    
  return (
    <div className="searchInput-page  mb-4">
        <div className="container">
            <div className="content">
                {
                    searchProduct.length > 0 ? searchProduct.map(product=><Card key={product.id} product={product}/>):<Reload/>
                }
            </div>
        </div>
    </div>
  )
}

export default SearchInput