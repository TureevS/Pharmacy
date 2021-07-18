import React, {useState} from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, Button} from '@material-ui/core';
import {Link } from 'react-router-dom';
import './styles.scss'

const Product = ({product,handleShowProduct,handleAddProduct,fetchCarts}) => {
    const[checkClick, setClick] = useState();

    const handleClick = () => {
    setClick(!checkClick);
    }

    return (
        <Card className='root' style={{ height: '100%' }}>
                <CardMedia style={{ height: '80px' }} className='CardMedia' image={product.image} title={product.name} component={Link} to={"/item"} onClick={()=> handleShowProduct(product.id)}/>
                <CardContent className='CardContent' style={{ height: '80px' }}>
                    <Typography component={Link} to={"/item"} onClick={()=> handleShowProduct(product.id)}
                     className='link' variant="subtitle1" >{product.name}</Typography>
                    <Typography variant="subtitle2" color="textSecondary">{product.category}</Typography>
                        
                </CardContent>    
                <CardActions disableSpacing className="CardActions" style={{ height: '50px' }}>
                        <Typography variant="h6">{product.price} ₽ </Typography>
                        { checkClick ? (
                            <Button variant='contained' color='primary' component={Link} to={'/cart'}>В корзине</Button>
                            ) : (
                            <Button variant='outlined' color='primary' 
                                onClick={() => {handleAddProduct(product.id, 1);fetchCarts();handleClick()}}>В корзину</Button>
                        )}                      
                </CardActions>            
        </Card>
    )
}

export default Product
