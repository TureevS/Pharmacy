<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    public $timestamps=false;

    protected $fillable = ['name', 'phone', 'mail', 'city','street', 'house','flat', 'comments', 'cost'];

    //Получение всех продуктов данного заказа
    public function products(){
        return $this->belongsToMany(Product::class, Order-Product::class);
    }
}
