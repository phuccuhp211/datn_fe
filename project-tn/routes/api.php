<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SisuController;

use App\Http\Controllers\Client\ProductController;
use App\Http\Controllers\Client\AnimalController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\Admin\CrudController;
// Product routes
Route::prefix('products')->group(function () {
    Route::get('/', [ProductController::class, 'index']); // Get all products
    Route::get('/detail/{id}', [ProductController::class, 'show']); // Get product details by ID
    Route::put('{id}', [ProductController::class, 'update']); // Update product information by ID
    Route::delete('{id}', [ProductController::class, 'destroy']); // Delete product by ID

    Route::get('/filter', [ProductController::class, 'filterProducts']); // Filter products based on specified conditions
    Route::get('/filter/{id}', [ProductController::class, 'productsByCatalog']); // Filter products by catalog ID
});

// Animal routes
Route::prefix('animals')->group(function () {
    Route::get('/', [AnimalController::class, 'index']); // Get all animals
    Route::get('{id}', [AnimalController::class, 'show']); // Get animal details by ID
    Route::post('/', [AnimalController::class, 'store']); // Create a new animal
    Route::put('{id}', [AnimalController::class, 'update']); // Update animal information by ID
    Route::delete('{id}', [AnimalController::class, 'destroy']); // Delete animal by ID
});
Route::prefix('cart')->group(function () {
    Route::post('/get', [CartController::class, 'getCart']);
    Route::post('/delete', [CartController::class, 'delete']);
    Route::post('/deleteAll', [CartController::class, 'deleteAllCart']);
    Route::post('/insertOrUpdate', [CartController::class, 'insertOrUpdate']);
});

Route::prefix('admin')->group(function () {

    Route::post('/animals/{action}/', [CrudController::class, 'animalManager']);
    Route::put('/animals/{action}/{id}', [CrudController::class, 'animalManager']);
    Route::delete('/animals/{action}/{id}', [CrudController::class, 'animalManager']);
    Route::post('/animalCatalog/{action}/', [CrudController::class, 'animalCatalogManager']);
    Route::post('/formRequest/{action}/', [CrudController::class, 'formRequestManager']);
    Route::post('/invoices/{action}/', [CrudController::class, 'invoiceManager']);
    Route::post('/products/{action}/', [CrudController::class, 'productManager']);
    Route::post('/productCatalog/{action}/', [CrudController::class, 'productCatalogManager']);
    Route::post('/sponsors/{action}/', [CrudController::class, 'sponsorManager']);
    Route::post('/stories/{action}/', [CrudController::class, 'storyManager']);
    Route::put('/stories/{action}/{id}', [CrudController::class, 'storyManager']);
    Route::delete('/stories/{action}/{id}', [CrudController::class, 'storyManager']);
    Route::post('/storyCatalog/{action}/', [CrudController::class, 'storyCatalogManager']);
    Route::post('/users/{action}/', [CrudController::class, 'userManager']);
});
