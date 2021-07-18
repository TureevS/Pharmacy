import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'
import './styles.scss'


const Cart = ({carts,handleDeleteProduct, totalPrice,handleUpdatePlusQty, handleUpdateMinusQty,fetchCarts,sizeCart}) => {
    const isEmpty=!sizeCart;

    const EmptyCart=()=>(
        <Typography variant="h4">Нет товаров в корзине</Typography>
    );

    const FilledCart = ()=>(
        <>
            <Grid container spacing={4}>
                {carts.map((cart)=>(
                    <Grid item xs={12} sm={4} key={cart.id}>
                        <CartItem 
                            item={cart} 
                            handleDeleteProduct={handleDeleteProduct} 
                            handleUpdatePlusQty={handleUpdatePlusQty}
                            handleUpdateMinusQty={handleUpdateMinusQty}
                            fetchCarts={fetchCarts}
                        />
                    </Grid>
                ))}
            </Grid>
            <div className="cardDetails">
                <Typography variant="h4" >Итого: {totalPrice}₽ </Typography>
                <div>
                    <Button 
                        component={Link} to ="/checkout"
                        className="checkoutButton"
                        size="large"
                        type="button"
                        variant="contained"
                        color="primary">
                            Оформить заказ
                    </Button>
                </div>
            </div>
        </>
    );

    return (
        <Container className="cart">
            <Typography className="title" variant="h4" gutterBottom>
                Корзина
            </Typography>
            {isEmpty ? <EmptyCart/> :<FilledCart/>}
        </Container>
    )
}

export default Cart
