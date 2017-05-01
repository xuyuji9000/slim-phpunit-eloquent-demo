<?php

namespace App\Repositories;

use App\Models\Author;

class AuthorRepository
{
    public function all()
    {
        return Author::all();
    }

    public function find($id, $columns = ['*'])
    {
        return Author::find($id, $columns);
    }
}
