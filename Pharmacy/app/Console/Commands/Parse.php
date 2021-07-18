<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class Parse extends Command
{

    protected $signature = 'parse:pharmacy';
    protected $description = 'Parse information from pharmacy';

    public function __construct()
    {
        parent::__construct();
    }

    protected function products_parse(array $out, Int $j, string $cat_name){
        //Названия товаров
        $BUD_ar = preg_grep('/class="name"/is', $out);
        $temp = implode("*", $BUD_ar);
        $html = new \Html2Text\Html2Text($temp);
        $string = $html->getText();
        $string = preg_replace('~\[.+?\]~', '', $string);
        $string = preg_replace('/\s+/', ' ', $string);
        $BUD_ar = explode("*", $string);
        foreach ($BUD_ar as $BUD) {
            $BUD = trim($BUD, ' \n\t');
        }

        //Изображения
        $BUD_image = array();
        $BUD_im = preg_grep('~.jpg~', $out);
        $temp = implode("*", $BUD_im);
        $temp = preg_replace('/<img src="/', '', $temp);
        $temp = preg_replace('/" alt="" title="">/', '', $temp);
        $temp = preg_replace('/\s+/', ' ', $temp);
        $BUD_im = explode("*", $temp);
        foreach ($BUD_im as $BUD) {
            $BUD = trim($BUD, ' \n\t');
        }
        for ($i = 10; $i <= sizeof($BUD_im)-1; $i++) {
            $BUD_im[$i] = substr_replace($BUD_im[$i], 'https://www.tvoyaapteka.ru', 0, 0);
            $BUD_im[$i] = preg_replace('/\s+/', '', $BUD_im[$i]);
            array_push($BUD_image, $BUD_im[$i]);
        }
        if (sizeof($BUD_image)!= sizeof($BUD_ar)){
            for ($i = sizeof($BUD_image); $i<=sizeof($BUD_ar)-1; $i++){
                array_push($BUD_image, $BUD_image[$j]);
            }
        }

        //Цена товаров
        $BUD_price = array();
        $BUD_pr = preg_grep('/class="num"/is', $out);
        $temp = implode("*", $BUD_pr);
        $html = new \Html2Text\Html2Text($temp);
        $temp = $html->getText();
        $temp = preg_replace('/руб./', '', $temp);
        $temp = preg_replace('/,/', '.', $temp);
        $temp = preg_replace('/\s+/', '', $temp);
        $BUD_pr = explode("*", $temp);
        foreach ($BUD_pr as $BUD) {
            $BUD = trim($BUD, ' \n\t');
            $BUD= floatval($BUD);
        }
        for ($i = 0; $i <= sizeof($BUD_pr)-1; $i++) {
            if ($i % 2 == 0) {
                array_push($BUD_price, $BUD_pr[$i]);
            };
        }
        if (sizeof($BUD_price)!= sizeof($BUD_ar)){
            for ($i = sizeof($BUD_price); $i<=sizeof($BUD_ar)-1; $i++){
                array_push($BUD_price, $BUD_pr[$j]);
            }
        }

        //Запись товаров в таблицу
        $servername = "127.0.0.1";
        $database = "laravel";
        $username = "root";
        $password = "qwerty";

        // Устанавливаем соединение
        $conn = mysqli_connect($servername, $username, $password, $database);
        for ($i = 0; $i <= sizeof($BUD_ar)-1; $i++) {
            DB::table('products')->insert(array('name' => $BUD_ar[$i], 
                                                'price' => floatval($BUD_price[$i]), 
                                                'image' => $BUD_image[$i], 
                                                'category_id' => $j, 
                                                'category'=> $cat_name));
        }
    }
    protected function categories_parse(){
        //Ссылки сайта с которых будем читать информацию
        $URL = array('https://www.tvoyaapteka.ru/catalog/bad-i-lechebnaja-kosmetika/bady-vitaminy/', 'https://www.tvoyaapteka.ru/catalog/bad-i-lechebnaja-kosmetika/bady-vitaminy/', 'https://www.tvoyaapteka.ru/catalog/bad-i-lechebnaja-kosmetika/bady-dlja-zrenija/', 'https://www.tvoyaapteka.ru/catalog/bad-i-lechebnaja-kosmetika/bady-dlja-serdechno-sosudistoj-sistemy/');

        $out = array();
        foreach ($URL as $urlsItem) {
            $arr = file($urlsItem);
            array_push($out, $arr);
        }

        //Извлечение категорий из кода
        $categories_ar = preg_grep('/class="a_item"/is', $out[0]);
        $temp = implode(" ", $categories_ar);
        $html = new \Html2Text\Html2Text($temp);
        $string = $html->getText();
        $string = preg_replace('~\[.+?\]~', '', $string);
        $string = preg_replace('/\s+/', ' ', $string);
        $categories_ar = explode("*", $string);
        foreach ($categories_ar as $category) {
            $category = trim($category, ' \n\t');
        }
        $my_categories = array($categories_ar[1], $categories_ar[5], $categories_ar[10]);


        //Запись категорий в таблицу категорий
        $servername = "127.0.0.1";
        $database = "laravel";
        $username = "root";
        $password = "qwerty";

        $conn = mysqli_connect($servername, $username, $password, $database); // Устанавливаем соединение
        for ($i = 0; $i <= 2; $i++) {
            DB::table('categories')->insert(array('name' => $my_categories[$i]));
        }
        mysqli_close($conn);



        $categories = DB::table('categories')->pluck('name');

        for ($j = 0; $j<=2; $j++) {
            $this->products_parse($out[$j+1], $j+1, $categories[$j]);
        }
    }
    public function handle()
    {
        //DB::table('categories')->truncate();;
        //DB::table('products')->truncate();;

        $this->categories_parse();

    }
// php artisan parse:pharmacy
}
