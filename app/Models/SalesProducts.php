<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesProducts extends Model
{
    use HasFactory;

    protected $fillable = [
        'sales_code',
        'product_id',
        'product_price'
    ];
}
