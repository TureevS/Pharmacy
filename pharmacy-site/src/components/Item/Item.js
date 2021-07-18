import React, {useState} from 'react'
import { Typography,Button } from '@material-ui/core'
import {withRouter,Link} from 'react-router-dom'
import './styles.scss'

const Item = ({data,handleAddProduct,fetchCarts}) => {
    const[checkClick, setClick] = useState();

    const handleClick = () => {
    setClick(!checkClick);
    }

    return (
    <main>
        <div className="product">
            <img  id="center" alt="center" src={data.image} width="400" height="300" />
            <div className="paper">
            <Typography variant="h3">{data.name}</Typography>
            <Typography variant="h5">Категория: {data.category}</Typography>
            <Typography variant="h5">Артикул: {data.id}</Typography>
            <Typography variant="h5">Цена: {data.price} ₽</Typography> 
            { checkClick ? (
                            <Button variant='contained' color='primary' component={Link} to={'/cart'}>В корзине</Button>
                            ) : (
                            <Button variant='outlined' color='primary' 
                                onClick={() => {handleAddProduct(data.id, 1);fetchCarts();handleClick()}}>В корзину</Button>
                        )}    
            </div>
        </div>
    </main>
        
    
    )
}

export default withRouter(Item)

