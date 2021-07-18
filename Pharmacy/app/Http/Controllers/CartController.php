<?php


namespace App\Http\Controllers;


use App\Models\Category;
use App\Models\Product;
use App\Models\OrderList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    
    public function cart()
    {
        $totalQty = 0;
        $totalPrice = 0;
        $orders = OrderList::all();
        foreach ($orders as $order){
            $totalQty=$totalQty + $order->quantity;
            $totalPrice = $totalPrice + $order->quantity * $order->price;
        }
        return [$orders, $totalQty, $totalPrice];
    }

    public function add(Request $request){
            $product = Product::find($request->id);
            $category = Category::where('id', $product->category_id)->first();
            $order_id = 1;
            $cart = DB::table('order_lists')->insert([
            'order_id' => $order_id,
            'product_id' => $product->id,
            'name' => $product->name,
            'price' => $product->price,
            'quantity' => $request->quantity,
            'category' => $category->name,
            'image' => $product->image
            ]);
            
            return $cart;
    }

    public function update(Request $request){

        $cart = OrderList::where('product_id', $request->product_id)->first();
        $cart->quantity = $request->quantity;
        $cart->save();
        return $cart;
        }
        
    public function delete(Request $request){
        
        $cart = OrderList::where('product_id', $request->product_id);
        $cart->delete();
        $orders = OrderList::all();
        return $orders;
    }
}
