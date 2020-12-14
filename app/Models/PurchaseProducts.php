<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseProducts extends Model
{
    use HasFactory;
    protected $fillable = [
        'purchase_code',
        'product_id',
        'product_price'
    ];
}
