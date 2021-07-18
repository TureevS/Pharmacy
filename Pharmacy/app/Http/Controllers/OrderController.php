<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderList;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function submit(Request $req)
    {
        $totalQty = 0;
        $totalPrice = 0;
        $order_id = 1;
        $orders = OrderList::all();
        foreach ($orders as $order){
            $totalQty=$totalQty + $order->quantity;
            $totalPrice = $totalPrice + $order->quantity * $order->price;
        }
        if($totalQty !=0) {
            $order = New Order;
            $order->name=$req->input('name');
            $order->phone=$req->input('phone');
            $order->mail=$req->input('mail');
            $order->city=$req->input('city');
            $order->street=$req->input('street');
            $order->house=$req->input('house');
            $order->flat=$req->input('flat');
            $order->comments=$req->input('comments');
            $order->order_id=$order_id;
            $order->cost=$totalPrice;
            $order->save();
            return true;
        }
        return false;
    }
}
