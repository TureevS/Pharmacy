<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderList extends Model
{
    use HasFactory;
    public $timestamps=false;

    protected $fillable = ['id', 'order_id', 'product_id','name', 'quantity', 'price', 'category', 'image' ];
}
