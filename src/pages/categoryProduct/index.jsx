import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../store';
import Crad from "../../componant/prodcut-card/index"
import Reload from "../../componant/reload/index"
import "./category.css"
 function CategoryPage() {

    // the array that has data from store page

    const {categoryProduct , setCategoryProduct ,loader, setLoading} = useContext(GlobalContext);

    //**************************** fetch category value from url *********************************************************

    const {category} = useParams();

    //******************************* function to fetch Api when we click on category and return product ***********************

    async function FilterCategory(category){
        const Url_SearchByCategory = `https://dummyjson.com/products/category/${category}`;
        const res = await fetch(Url_SearchByCategory);
        const data = await res.json();
        if(data?.products){
            setLoading(false)
            setCategoryProduct(data?.products)
        }
        
    }
    useEffect(()=>{
        FilterCategory(category);
    }, [category])

    //**************************** if data not fetch do reload until data download*************************************

    if(loader){
        return(
          <Reload/>
        )
      }

    //*************************************************************************************************************************

  return (
    <div className="caregory-filter-product mb-4">
        <div className="container">
            <div className="content">
                {
                    categoryProduct.length >0 ? categoryProduct.map(product=><Crad key={product.id} product={product}/>) : <Reload/>
                }
            </div>
        </div>
    </div>
  )
}

export default CategoryPage