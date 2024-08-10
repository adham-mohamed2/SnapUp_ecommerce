import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext(null);
function GlobalStore({children}) {

  const navigate = useNavigate();

    //****************** all state projetc **********************************
   const [allProduct , setAllProduct] = useState([]);
   const [loader , setLoading] = useState(true);
   const [open , setOpen] = useState(false);
   const [category , setCategory] = useState([]);
   const [searchProduct , setSearchProduct] = useState([]);
   const [categoryProduct , setCategoryProduct] = useState([]);
   const [searchValue , setSearchValue] = useState("");
   const [cardProduct , setCardProduct] = useState([]);
   const [details , setDetails] = useState([]);
   const [openSidebar , setOpenSildebar] = useState(false);
   const [limit , setLimit] = useState(32);
   
   //******************* get Api All Product ***************************************************************************************************

   
   async function FetchAllProductApi(limit){
    const Url_Api = `https://dummyjson.com/products?limit=${limit}&skip=0`;
      const res = await fetch(Url_Api);
      const data = await res.json();
      if(data?.products){
        setLoading(false);
        setAllProduct(data?.products);
      }
      
     
   }
   
   ///*************** increase product limit

   function handleIncreaseProduct(){
    setLimit(limit => limit + 4);
   }
   
   //*************** decrease product limit

   function handleDecreaseProduct(){
    setLimit(limit => limit - 4);
   }

   //************* useEffect hen we do change on limit the function allProduct will be work

   useEffect(()=>{
    FetchAllProductApi(limit)
   },[limit])


   //******************* get Api category product ********************************************************************************************

   const Url_Category = 'https://dummyjson.com/products/category-list'
   async function FetchCategory(Url_Category){
    const res = await fetch(Url_Category);
    const data = await res.json();
      if(data){
        setCategory(data);
      }
    }
    
   

    //***** get limit category ******

    let LimitCategory = [...category];
    LimitCategory = LimitCategory.splice(1 ,9);
    
    
   //*********************************** Add product to shopping card ***************************************************************************** */

   function handleAddToCard(product){
    let copyProduct = [...cardProduct];
    let index = copyProduct.findIndex(item=>item.id === product.id);
    if(index === -1){
      copyProduct.push({
        ...product ,
        quantityes:1,
         totalPrice : product?.price,
      });
      setOpen(true);
      setTimeout(()=>{
        setOpen(false)
      },4000)
    }else{
      
      copyProduct[index] ={
        ...copyProduct[index],
        quantityes :copyProduct[index].quantityes + 1,
        totalPrice: (copyProduct[index].quantityes + 1) * copyProduct[index].price
      }
    }

    setCardProduct(copyProduct);
    localStorage.setItem("Item" , JSON.stringify(copyProduct));

    
    
   }


   //************************************** Remove product from shopping card *********************************************************** */

   function handleRemoveItem(product , fullRemove){
    let copyproduct = [...cardProduct];
    let index = copyproduct.findIndex(item=> item.id === product.id);
    if(fullRemove){
      copyproduct.splice(index , 1);
    }else{
      copyproduct[index]={
        ...copyproduct[index],
        quantityes:copyproduct[index].quantityes - 1,
        totalPrice :  (copyproduct[index].quantityes - 1 ) * copyproduct[index].price
      }
    }
    setCardProduct(copyproduct);
    localStorage.setItem("Item" , JSON.stringify(copyproduct));
    navigate("/card")
   }

   //************************************* work function FectchCategory and get data from localStorage and push to setCardProduct ********** */


   useEffect(()=>{
    FetchCategory(Url_Category)
    setCardProduct(JSON.parse(localStorage.getItem("Item") , []))
  },[])

   //************************************** when click on button in shopping card go to hame page to add product******************************************************/
   
   function handleShopinHome(){
    navigate("/")
    }

  return (
    <GlobalContext.Provider value={{ loader,category , openSidebar ,allProduct , LimitCategory ,categoryProduct ,searchValue , open   , cardProduct, searchProduct , details , handleShopinHome  , setOpen , setLoading  , handleRemoveItem, handleAddToCard, setDetails , setSearchProduct , setSearchValue, setCategoryProduct , setOpenSildebar , handleIncreaseProduct , handleDecreaseProduct  }}>
        {children}
    </GlobalContext.Provider>
        
  )
}

export default GlobalStore