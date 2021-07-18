import React from 'react'
import { Typography, Card,CardActions,IconButton, CardHeader, CardMedia } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './styles.scss'

const CartItem = ({item,handleDeleteProduct,handleUpdatePlusQty,handleUpdateMinusQty,fetchCarts}) => {
    
    return (
        <Card className="card" style={{ height: '100%' }}>
            <CardHeader
                action={
                <IconButton color="secondary" aria-label="settings" onClick={()=> {handleDeleteProduct(item.product_id);fetchCarts()}}>
                    <HighlightOffIcon/>
                </IconButton>
                }
                style={{ height: '70px' }}
                titleTypographyProps={{variant:'h6' }}
                title={item.name}
                subheader={item.category}
            />
            <CardMedia style={{ height: '70px' }}  className="media" image={item.image}/>
            <CardActions className="cardActions" style={{ height: '50px' }}> 
                <div className="buttons">
                    <IconButton color="default" type="button" size="small" 
                        onClick={()=> {handleUpdateMinusQty(item.product_id, item.quantity);fetchCarts()}}><RemoveIcon/></IconButton>
                    <Typography variant="h6">{item.quantity}</Typography>
                    <IconButton color="default" type="button" size="small" 
                        onClick={()=> {handleUpdatePlusQty(item.product_id,item.quantity);fetchCarts()}}><AddIcon/></IconButton>
                </div>
                <Typography variant="h5">{item.price * item.quantity} ₽</Typography>
            </CardActions>
        </Card>
    )
}

export default CartItem
