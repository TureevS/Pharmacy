import React, {useState} from 'react'
import {Paper, Typography,TextField ,Button,Checkbox,FormControlLabel,Snackbar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(3),
        width: '60ch',
      },
    },
    layout: {
        marginTop: '5%',
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          marginTop: 60,
        },
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
          padding: theme.spacing(3),
        },
      }
  }));

const Checkout = ({totalPrice, handleSubmit}) => {
    const classes=useStyles();

    const[name,setName]=useState("");
    const[phone,setPhone]=useState("");
    const[mail,setMail]=useState("");
    const[city,setCity]=useState("");
    const[street,setStreet]=useState("");
    const[house,setHouse]=useState("");
    const[flat,setFlat]=useState("");
    const[comment,setComment]=useState("");

    const[nameFlag,setNameFlag]=useState(true);
    const[phoneFlag,setPhoneFlag]=useState(true);
    const[mailFlag,setMailFlag]=useState(true);
    const[cityFlag,setCityFlag]=useState(true);
    const[streetFlag,setStreetFlag]=useState(true);
    const[houseFlag,setHouseFlag]=useState(true);
    const[flatFlag,setFlatFlag]=useState(true);
    const[check,checkFlag]=useState(true);

    const[phoneError,setPhoneError]=useState('Обязательное поле');
    const[mailError,setMailError]=useState('Обязательное поле');
    const[cityError,setCityError]=useState('Обязательное поле');
    const[streetError,setStreetError]=useState('Обязательное поле');
    const[houseError,setHouseError]=useState('Обязательное поле');
    const[flatError,setFlatError]=useState('Обязательное поле');

    const nameHandler=(event)=>{
      setName(event.target.value)
      setNameFlag(false)
    }
    const phoneHandler=(event)=>{
      setPhone(event.target.value)
      setPhoneFlag(false)
    }
    
    const mailHandler=(event)=>{
      setMail(event.target.value)
      setMailFlag(false)
    }

    const cityHandler=(event)=>{
      setCity(event.target.value)
      setCityFlag(false)
    }
    
    const streetHandler=(event)=>{
      setStreet(event.target.value)
      setStreetFlag(false)
    }

    const houseHandler=(event)=>{
      setHouse(event.target.value)
      setHouseFlag(false)
    }
    
    const flatHandler=(event)=>{
      setFlat(event.target.value)
      setFlatFlag(false)
    }

    const changeValue=()=>{
      checkFlag(!check);
    }

    const blurHandler=(event)=>{
      switch(event.target.name){
        case "FIO":
          if(name ===""){
            setNameFlag(true)
          }
          else{
            setNameFlag(false)
          }
          break
        case "number":
          const reg = /^\d+$/;
          if(phone ===""||phone.length !== 11||!reg.test(String(phone))){
            setPhoneFlag(true)
            if(phone.length !== 11 ||!reg.test(String(phone)))
              setPhoneError('Некорректный номер')
            if(phone ==="")
              setPhoneError('Обязательное поле')
          }
          else{
            setPhoneFlag(false)
          }
          break
        case "email":
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(mail ===""||!re.test(String(mail).toLowerCase())){
            setMailFlag(true)
            if(!re.test(String(mail).toLowerCase()))
              setMailError('Некорректный e-mail')
            if(mail ==="")
              setMailError('Обязательное поле')
          }
          else{
            setMailFlag(false)
          }
          break
        case "city":
          const reg1 = /^[a-zа-яё]+$/;
          if(city ===""||!reg1.test(String(city).toLowerCase())){
            setCityFlag(true)
            if(!reg1.test(String(city).toLowerCase()))
              setCityError('Название города должно содержать только буквы')
            if(city ==="")
              setCityError('Обязательное поле')
          }
          else{
            setCityFlag(false)
          }
          break
        case "street":
          const reg2 = /^[a-zа-яё]+$/;
          if(street ===""||!reg2.test(String(street).toLowerCase())){
            setStreetFlag(true)
            if(!reg2.test(String(street).toLowerCase()))
              setStreetError('Название улицы должно содержать только буквы')
            if(street ==="")
              setStreetError('Обязательное поле')
          }
          else{
            setStreetFlag(false)
          }
          break
        case "house":
          const reg3 = /^\d+$/;
          if(house ===""||!reg3.test(String(house))){
            setHouseFlag(true)
            if(!reg3.test(String(house)))
              setHouseError('Некорректный номер дома')
            if(house ==="")
              setHouseError('Обязательное поле')
          }
          else{
            setHouseFlag(false)
          }
          break
        case "flat":
          const reg4 = /^\d+$/;
          if(flat ===""||!reg4.test(String(flat))){
            setFlatFlag(true)
            if(!reg4.test(String(flat)))
              setFlatError('Некорректный номер квартиры')
            if(flat ==="")
              setFlatError('Обязательное поле')
          }
          else{
            setFlatFlag(false)
          }
          break
      }
    }

    const [open, setOpen] = React.useState(false);
    function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };
    
    
    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Оформление заказа</Typography>                    
                <form  className={classes.root}>
                    <Typography variant="subtitle2" align="left">Личные данные:</Typography>
                    <TextField 
                        name="FIO"
                        label="ФИО" 
                        onChange={(event)=>nameHandler(event)}
                        error={Boolean(nameFlag)}
                        helperText={Boolean(nameFlag) ? 'Обязательное поле' : ''}
                        onBlur={(event)=>{blurHandler(event)}}
                        />
                    <TextField 
                        name="number" 
                        label="Номер телефона" 
                        onChange={(event)=>phoneHandler(event)}
                        error={Boolean(phoneFlag)}
                        helperText={Boolean(phoneFlag) ? phoneError : '8(xxx)-xxx-xxxx'}
                        onBlur={event=>blurHandler(event)}
                        />
                    <TextField 
                        name="email" 
                        label="e-mail" 
                        onChange={(event)=>mailHandler(event)}
                        error={Boolean(mailFlag)}
                        helperText={Boolean(mailFlag) ? mailError : ''}
                        onBlur={event=>blurHandler(event)}
                        />
                    <Typography variant="subtitle2" align="left">Доставка:</Typography>
                    <TextField 
                        name="city" 
                        label="Город"
                        onChange={(event)=>cityHandler(event)}
                        error={Boolean(cityFlag)}
                        helperText={Boolean(cityFlag) ? cityError : ''}
                        onBlur={event=>blurHandler(event)}
                        />
                    <TextField 
                        name="street"
                        label="Улица" 
                        onChange={(event)=>streetHandler(event)}
                        error={Boolean(streetFlag)}
                        helperText={Boolean(streetFlag) ? streetError : ''}
                        onBlur={event=>blurHandler(event)}
                        />
                    <TextField 
                        name="house" 
                        label="Дом"
                        onChange={(event)=>houseHandler(event)}
                        error={Boolean(houseFlag)}
                        helperText={Boolean(houseFlag) ? houseError : ''}
                        onBlur={event=>blurHandler(event)}
                        />
                    <TextField 
                        name="flat" 
                        label="Квартира"
                        onChange={(event)=>flatHandler(event)}
                        error={Boolean(flatFlag)}
                        helperText={Boolean(flatFlag) ? flatError : ''}
                        onBlur={event=>blurHandler(event)}
                        />
                    
                    <TextField
                      id="filled-textarea"
                      label="Комментарий к заказу"
                      placeholder="Оставьте свой комментарий"
                      rows={4}
                      multiline
                      variant="outlined"
                      onChange={(event)=>setComment(event.target.value)}
                    />
                    <Typography variant="h6" align="left">Итоговая стоимость заказа: {totalPrice}₽</Typography>
                    <FormControlLabel
                      control={<Checkbox color="default" onChange={()=>changeValue()}/>}
                      label="Согласие на обработку персональных данных"
                    />  
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                      <Button component={Link} to="/cart" variant="outlined">Назад</Button>
                      { Boolean(!nameFlag && !phoneFlag && !mailFlag && !cityFlag && !streetFlag && !houseFlag && !flatFlag && !check) ? (
                            <Button  type="submit" variant="contained" color="primary" 
                            onClick={()=>{handleSubmit(name,phone,mail,city,street,house,flat,comment);handleClick()}}>Оформить заказ</Button>
                            ):(<Button variant="contained" disabled>Оформить заказ</Button>)} 
                      
                    </div>
                    <Snackbar open={open} onClose={handleClose}>
                      <Alert onClose={handleClose} severity="success">
                        Заказ успешно оформлен!
                      </Alert>
                    </Snackbar>          
                </form> 
                
            </Paper>
            
        </main>
    )
}

export default Checkout
