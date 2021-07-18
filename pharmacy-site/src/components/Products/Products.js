import React, {useState} from 'react';
import { Grid, Container, Button, Menu, MenuItem, TextField } from '@material-ui/core';
import Product from './Product/Product'
import './styles.scss'

const Products = ({products, category, handleShowProduct, categoryFilter,showProducts,handleAddProduct,fetchCarts}) => {

    const [value, setValue] = useState('')

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorE3, setAnchorE3] = React.useState(null);

    const handleClick3 = (event) => {
        setAnchorE3(event.currentTarget);
    };
    
    const handleClose3 = () => {
        setAnchorE3(null);
    };

    const search = products.filter(product=>{
        return product.name.toLowerCase().includes(value.toLowerCase())
    });
    
    return (
        <main className="content">
            <Container className="cardGrid" maxWidth="md">
                <div className="navigation">
                    <TextField variant="outlined" size="small" 
                            placeholder="Поиск..." onChange={(event)=>setValue(event.target.value)}/>
                    <div>
                        <Button aria-controls="sort" aria-haspopup="true" color="primary" onClick={handleClick3}>
                            Сортировать
                        </Button>
                        <Menu id="menu" anchorEl={anchorE3} keepMounted open={Boolean(anchorE3)} onClose={handleClose3}>
                            <MenuItem onClick={()=>{handleClose3()}}>По наименованию</MenuItem>
                            <MenuItem onClick={()=>{handleClose3()}}>По убыванию цены</MenuItem>
                            <MenuItem onClick={()=>{handleClose3()}}>По возрастанию цены</MenuItem>
                        </Menu>
                        
                        <Button aria-controls="simple-menu" aria-haspopup="true" color="primary" onClick={handleClick}>
                            Категории
                        </Button>
                        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                            <MenuItem onClick={()=>{handleClose();showProducts()}}>Все категории</MenuItem>
                            {category.map((categor)=>(
                                <MenuItem onClick={()=>{handleClose();categoryFilter(categor.id)}}>{categor.name}</MenuItem>
                            ))}
                        </Menu>
                    </div>
                </div>
                <Grid container spacing={5}>
                    {search.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4}>
                            <Product 
                                product={product} 
                                handleShowProduct={handleShowProduct} 
                                handleAddProduct={handleAddProduct}
                                fetchCarts={fetchCarts}/>
                        </Grid>
                    ))}
                </Grid> 
            </Container>
        </main>
    );
}

export default Products
