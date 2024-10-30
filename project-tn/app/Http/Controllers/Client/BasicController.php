<?php

namespace App\Http\Controllers\Client;

use App\Repositories\ProductRepositoryInterface;
use App\Interfaces\ProductCatalogRepositoryInterface;
use App\Repositories\AnimalRepositoryInterface;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BasicController extends Controller
{
    protected $productRepository;
    protected $productCatalogRepository;
    protected $animalRepository;

    public function __construct(ProductRepositoryInterface $productRepository, ProductCatalogRepositoryInterface $productCatalogRepository, AnimalRepositoryInterface $animalRepository)
    {
        $this->productRepository = $productRepository;
        $this->productCatalogRepository = $productCatalogRepository;
        $this->animalRepository = $animalRepository;
    }

    // Product Methods
    public function indexProducts()
    {
        $products = $this->productRepository->all();
        $result = $this->formatProducts($products);
        return response()->json($result);
    }

    public function showProduct($id)
    {
        $product = $this->productRepository->find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $result = $this->formatProducts(collect([$product]));
        return response()->json($result[0]);
    }

    public function storeProduct(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'type' => 'required|integer',
            'images' => 'nullable|json',
        ]);

        $product = $this->productRepository->create($data);
        return response()->json($product, 201);
    }

    public function updateProduct(Request $request, $id)
    {
        $data = $request->validate([
            'name' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'type' => 'nullable|integer',
            'images' => 'nullable|json',
        ]);

        $updatedProduct = $this->productRepository->update($id, $data);
        if (!$updatedProduct) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $result = $this->formatProducts(collect([$updatedProduct]));
        return response()->json($result[0]);
    }

    public function destroyProduct($id)
    {
        $deleted = $this->productRepository->delete($id);
        if (!$deleted) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        return response()->json(['message' => 'Product deleted successfully']);
    }

    public function productsByCatalog($catalogId)
    {
        $products = $this->productRepository->productsByCatalog($catalogId);
        if ($products->isEmpty()) {
            return response()->json(['message' => 'No products found in this catalog.'], 404);
        }
        $result = $this->formatProducts($products);
        return response()->json($result);
    }

    public function filterProducts(Request $request)
    {
        $data = $request->validate([
            'action' => 'required|string',
            'data' => 'required|string',
            'order' => 'required|integer',
            'page' => 'required|integer',
            'limit' => 'required|integer',
        ]);

        $products = $this->productRepository->filter($data['action'], $data['data'], $data['order'], $data['page'], $data['limit']);
        return response()->json($products);
    }

    private function formatProducts($products)
    {
        return $products->map(function ($product) {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'type' => $product->type,
                'images' => $product->images->pluck('url'),
                'sizes' => $product->sizes->map(function ($size) use ($product) {
                    return [
                        'id' => $size->id,
                        'price' => $size->price,
                        'discount_price' => $size->discount_price,
                        'size' => $size->size,
                        'options' => $size->options->map(function ($option) use ($product) {
                            if ($product->type == 1) {
                                // Nếu là sản phẩm thức ăn (type == 1)
                                return [
                                    'flavor' => $option->flavor,
                                    'quantity' => $option->quantity,
                                ];
                            } else {
                                // Nếu là các sản phẩm khác (ví dụ: quần áo)
                                return [
                                    'color' => $option->color,
                                    'quantity' => $option->quantity,
                                ];
                            }
                        }),
                    ];
                }),
            ];
        });
    }

    // Product Catalog Methods
    public function indexCatalogs()
    {
        $catalogs = $this->productCatalogRepository->all();
        return response()->json($catalogs);
    }

    public function showCatalog($id)
    {
        $catalog = $this->productCatalogRepository->findById($id);
        return response()->json($catalog);
    }

    public function storeCatalog(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:product_catalogs',
            'index' => 'required|integer',
        ]);

        $catalog = $this->productCatalogRepository->create($validatedData);
        return response()->json($catalog, 201);
    }

    public function updateCatalog(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'slug' => 'sometimes|required|string|max:255|unique:product_catalogs,slug,' . $id,
            'index' => 'sometimes|required|integer',
        ]);

        $catalog = $this->productCatalogRepository->update($id, $validatedData);
        return response()->json($catalog);
    }

    public function destroyCatalog($id)
    {
        $this->productCatalogRepository->delete($id);
        return response()->json(null, 204);
    }

    // Animal Methods
    public function indexAnimals()
    {
        $animals = $this->animalRepository->getAll();
        $result = $this->formatAnimals($animals);
        return response()->json($result);
    }

    public function showAnimal($id)
    {
        $animal = $this->animalRepository->getById($id);
        $result = $this->formatAnimals(collect([$animal]));
        return response()->json($result[0]);
    }

    public function storeAnimal(Request $request)
    {
        $animal = $this->animalRepository->create($request->all());
        return response()->json($animal, 201);
    }

    public function updateAnimal(Request $request, $id)
    {
        $animal = $this->animalRepository->update($id, $request->all());
        return response()->json($animal);
    }

    public function destroyAnimal($id)
    {
        $animal = $this->animalRepository->delete($id);
        return response()->json(null, 204);
    }

    private function formatAnimals($animals)
    {
        return $animals->map(function ($animal) {
            return [
                'id' => $animal->id,
                'name' => $animal->name,
                'description' => $animal->description,
                'type' => $animal->type,
                'health_info' => json_decode($animal->health_info),
                'images' => $animal->images->pluck('url'),
            ];
        });
    }
}
