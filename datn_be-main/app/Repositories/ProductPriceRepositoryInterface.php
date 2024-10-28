<?php

namespace App\Repositories;

interface ProductPriceRepositoryInterface
{
    public function newModel();
    
    public function getAll();

    public function getById(int $id);

    public function getByProductId(int $id);

    public function create(array $data);

    public function deleteMany(int $id);

    public function update(int $id, array $data);

    public function delete(int $id);
}