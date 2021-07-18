import React ,{ useState, useEffect } from 'react';
import {Products, Navbar, Cart, Item, Checkout} from './components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Pagination } from '@material-ui/lab';
import './styles.scss'

const App2 = () => {
    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([])
    const [sizeCart, setSizeCart] = useState([])
    const [totalPrice, setTotalPrice] = useState([])
    const [data,setData]=useState([])
    const [category,setCategory]=useState([])

    const [currentPage, setCurrentPage]=useState(1);
    const [postsPerPage, setPostsPerPage]=useState(9);
    const paginate = (event, value) => {
        setCurrentPage(value);
    };

    const fetchProducts=async()=>{
        let result = await fetch("http://localhost:8000/api/products");
        result = await result.json();
        setProducts(result);
    }

    const fetchFilterProducts=async(category_id)=>{
        let result = await fetch("http://localhost:8000/api/products?category="+category_id);
        result = await result.json();
        setProducts(result);
    }

    const handleShowProduct =async(productId)=>{
        let result= await fetch("http://localhost:8000/api/products/"+productId)
        result = await result.json();
        setData(result)
    }

    const fetchCategory=async()=>{
        let result= await fetch("http://localhost:8000/api/category")
        result = await result.json();
        setCategory(result)
    }

    const fetchCarts=async()=>{
        let result = await fetch("http://localhost:8000/api/cart");
        result = await result.json();
        setCarts(result[0]);
        setSizeCart(result[1]);
        setTotalPrice(result[2]);
    }

    const handleAddProduct =async(product_id,quantity)=>{
        const productData = new FormData();
        productData.append('id',product_id);
        productData.append('quantity',quantity);
        let result= await fetch("http://localhost:8000/api/cart/add",{
            method: 'POST',
            body: productData
        })
    }

    const handleDeleteProduct =async(product_id)=>{
        const productIdData = new FormData();
        productIdData.append('product_id',product_id);
        let result= await fetch("http://localhost:8000/api/cart/delete",{
            method: 'POST',
            body: productIdData
        })
    }

    const handleUpdatePlusQty =async(product_id, quantity)=>{
        quantity++;
        const productIdData = new FormData();
        productIdData.append('product_id',product_id);
        productIdData.append('quantity',quantity);
        let result= await fetch("http://localhost:8000/api/cart/update",{
            method: 'POST',
            body: productIdData
        })
    }
    const handleUpdateMinusQty =async(product_id, quantity)=>{
        quantity--;
        const productIdData = new FormData();
        productIdData.append('product_id',product_id);
        productIdData.append('quantity',quantity);
        let result= await fetch("http://localhost:8000/api/cart/update",{
            method: 'POST',
            body: productIdData
        })
    }

    const handleSubmit =async(name,phone,mail,city, street, house, flat, comment)=>{
        const submitData = new FormData();
        submitData.append('name',name);
        submitData.append('phone',phone);
        submitData.append('mail',mail);
        submitData.append('city',city);
        submitData.append('street',street);
        submitData.append('house',house);
        submitData.append('flat',flat);
        submitData.append('comments',comment);
        let result= await fetch("http://localhost:8000/api/cart/submit",{
            method: 'POST',
            body: submitData
        })
        
    }

    useEffect(async () => {
        fetchProducts();
        fetchCategory();
        fetchCarts();
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost,indexOfLastPost);
    return (
        <Router>
            <div>
                <Navbar showCart={fetchCarts} sizeCart={sizeCart}/>
                <Switch>
                    <Route exact path="/">   
                        <Products   
                            products={currentPosts}
                            category={category} 
                            handleShowProduct={handleShowProduct}
                            categoryFilter={fetchFilterProducts}
                            showProducts={fetchProducts}
                            handleAddProduct={handleAddProduct}
                            fetchCarts={fetchCarts}
                        />
                        <div className="pagination">
                        <Pagination 
                            shape="rounded" 
                            color="primary" 
                            count={Math.round(products.length / postsPerPage)} 
                            page={currentPage} 
                            onChange={paginate}/>
                        </div>
                        
                    </Route>
                    <Route exact path="/cart">
                        <Cart 
                            carts={carts} 
                            handleDeleteProduct={handleDeleteProduct} 
                            totalPrice={totalPrice}
                            handleUpdatePlusQty={handleUpdatePlusQty}
                            handleUpdateMinusQty={handleUpdateMinusQty}
                            fetchCarts={fetchCarts}
                            sizeCart={sizeCart}
                        />
                    </Route>
                    <Route exact path="/item">
                        <Item data={data} handleAddProduct={handleAddProduct} fetchCarts={fetchCarts}/>
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout totalPrice={totalPrice} handleSubmit={handleSubmit}/>
                    </Route>
                </Switch>
            </div>
        </Router>
        
    )
}

export default App2
