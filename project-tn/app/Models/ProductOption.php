<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductOption extends Model
{
    use HasFactory;

    protected $fillable = [
        'size_id',
        'name',
        'quantity'
    ];

    public function price()
    {
        return $this->belongsTo(ProductPrice::class, 'price_id');
    }
}
