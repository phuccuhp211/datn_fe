<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    use HasFactory;

    protected $table = 'animals';

    // Các cột trong bảng animals
    protected $fillable = [
        'type',
        'name',
        'age',
        'gender',
        'colors',
        'genitive',
        'health_info',
        'user_id',
        'language',
        'slug',
        'form_request_id',
    ];

    public function images()
    {
        return $this->hasMany(Image::class, 'reference_id')->where('table', 'animals');
    }
}
