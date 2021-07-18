<?php

namespace App\Http\Controllers;


use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function products(Request $request)
    {
        if ($request->has('category')){
            $products = Product::where('category_id', $request->category)->get();
        }
        else{
            $products = Product::all();
        }
        return $products;
    }

    public function getProduct($id)
    {
        return Product::find($id);
    }
}
