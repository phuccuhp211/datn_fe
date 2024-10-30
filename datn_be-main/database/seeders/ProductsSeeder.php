<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\ProductPrice;
use App\Models\Image;
use App\Models\ProductOption;

class ProductsSeeder extends Seeder
{
    public function run()
    {
        $products = [
            // Thức ăn cho thú cưng
            [
                'name' => 'Thức ăn cho chó vị gà',
                'purpose' => 'Thức ăn dinh dưỡng cho chó với hương vị gà.',
                'type' => '1',
                'images' => ['food1_1.webp', 'food1_2.webp'],
                'sizes' => [
                    [
                        'price' => 100000,
                        'sale' => 90000,
                        'name' => '500g',
                        'options' => [
                            ['name' => 'Gà', 'quantity' => 10],
                            ['name' => 'Thịt bò', 'quantity' => 5],
                        ]
                    ],
                    [
                        'price' => 120000,
                        'sale' => null,
                        'name' => '1kg',
                        'options' => [
                            ['name' => 'Gà', 'quantity' => 8],
                            ['name' => 'Cá hồi', 'quantity' => 7],
                        ]
                    ],
                ]
            ],
            [
                'name' => 'Thức ăn cho mèo vị cá',
                'purpose' => 'Thức ăn cho mèo vị cá hồi, bổ dưỡng.',
                'type' => '1',
                'images' => ['food2_1.webp', 'food2_2.webp'],
                'sizes' => [
                    [
                        'price' => 95000,
                        'sale' => 85000,
                        'name' => '500g',
                        'options' => [
                            ['name' => 'Cá hồi', 'quantity' => 12],
                            ['name' => 'Cá ngừ', 'quantity' => 10],
                        ]
                    ],
                    [
                        'price' => 120000,
                        'sale' => null,
                        'name' => '1kg',
                        'options' => [
                            ['name' => 'Cá hồi', 'quantity' => 9],
                        ]
                    ],
                ]
            ],
            // Các sản phẩm khác
            [
                'name' => 'Áo thun đỏ cho chó',
                'purpose' => 'Áo thun thời trang màu đỏ cho thú cưng.',
                'type' => '2',
                'images' => ['clothes1_1.jpg', 'clothes1_2.jpg'],
                'sizes' => [
                    [
                        'price' => 110000,
                        'sale' => 100000,
                        'name' => 'M',
                        'options' => [
                            ['name' => 'Đỏ', 'quantity' => 8],
                            ['name' => 'Vàng', 'quantity' => 6],
                        ]
                    ],
                    [
                        'price' => 130000,
                        'sale' => null,
                        'name' => 'L',
                        'options' => [
                            ['name' => 'Xanh', 'quantity' => 4],
                        ]
                    ],
                ]
            ],
            [
                'name' => 'Áo thun xanh cho mèo',
                'purpose' => 'Áo thun màu xanh cho mèo.',
                'type' => '2',
                'images' => ['clothes2_1.jpg', 'clothes2_2.jpg'],
                'sizes' => [
                    [
                        'price' => 105000,
                        'sale' => 95000,
                        'name' => 'S',
                        'options' => [
                            ['name' => 'Xanh', 'quantity' => 6],
                        ]
                    ],
                    [
                        'price' => 120000,
                        'sale' => null,
                        'name' => 'M',
                        'options' => [
                            ['name' => 'Đen', 'quantity' => 3],
                        ]
                    ],
                ]
            ],
            [
                'name' => 'Lược chải lông chó mèo',
                'purpose' => 'Dụng cụ chăm sóc lông cho thú cưng, dễ sử dụng.',
                'type' => '3',
                'images' => ['tool1_1.webp', 'tool1_2.webp'],
                'sizes' => [
                    [
                        'price' => 50000,
                        'sale' => 45000,
                        'name' => 'S',
                        'options' => [
                            ['name' => 'Hồng', 'quantity' => 20],
                        ]
                    ],
                    [
                        'price' => 60000,
                        'sale' => null,
                        'name' => 'M',
                        'options' => [
                            ['name' => 'Xám', 'quantity' => 15],
                        ]
                    ],
                ]
            ],
            [
                'name' => 'Bát ăn cho chó mèo',
                'purpose' => 'Bát ăn bằng nhựa cao cấp cho chó mèo.',
                'type' => '3',
                'images' => ['tool2_1.webp', 'tool2_2.webp'],
                'sizes' => [
                    [
                        'price' => 35000,
                        'sale' => 30000,
                        'name' => 'M',
                        'options' => [
                            ['name' => 'Trắng', 'quantity' => 15],
                        ]
                    ],
                    [
                        'price' => 40000,
                        'sale' => null,
                        'name' => 'L',
                        'options' => [
                            ['name' => 'Đen', 'quantity' => 10],
                        ]
                    ],
                ]
            ],
            [
                'name' => 'Bóng cao su cho chó',
                'purpose' => 'Đồ chơi bóng cao su cho chó, bền bỉ và an toàn.',
                'type' => '4',
                'images' => ['toy1_1.webp', 'toy1_2.webp'],
                'sizes' => [
                    [
                        'price' => 60000,
                        'sale' => null,
                        'name' => 'M',
                        'options' => [
                            ['name' => 'Vàng', 'quantity' => 15],
                        ]
                    ],
                    [
                        'price' => 70000,
                        'sale' => 65000,
                        'name' => 'L',
                        'options' => [
                            ['name' => 'Xanh', 'quantity' => 10],
                        ]
                    ],
                ]
            ],
            [
                'name' => 'Đồ chơi chuột cho mèo',
                'purpose' => 'Đồ chơi chuột bông nhỏ gọn cho mèo.',
                'type' => '4',
                'images' => ['toy2_1.jpg', 'toy2_2.jpg'],
                'sizes' => [
                    [
                        'price' => 45000,
                        'sale' => 40000,
                        'name' => 'S',
                        'options' => [
                            ['name' => 'Xám', 'quantity' => 12],
                        ]
                    ],
                    [
                        'price' => 50000,
                        'sale' => null,
                        'name' => 'M',
                        'options' => [
                            ['name' => 'Trắng', 'quantity' => 8],
                        ]
                    ],
                ]
            ],
        ];

        foreach ($products as $productData) {
            $product = Product::create([
                'name' => $productData['name'],
                'purpose' => $productData['purpose'],
                'type' => $productData['type'],
            ]);

            foreach ($productData['images'] as $imageUrl) {
                Image::create([
                    'reference_id' => $product->id,
                    'table' => 'products',
                    'url' => $imageUrl,
                ]);
            }
            foreach ($productData['sizes'] as $sizeData) {
                $size = ProductPrice::create([
                    'product_id' => $product->id,
                    'price' => $sizeData['price'],
                    'sale' => $sizeData['sale'],
                    'name' => $sizeData['name'],
                ]);

                foreach ($sizeData['options'] as $optionData) {
                    ProductOption::create([
                        'price_id' => $size->id,
                        'name' => $optionData['name'],
                        'quantity' => $optionData['quantity'],
                    ]);
                }
            }
        }
    }
}
