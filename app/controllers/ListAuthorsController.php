<?php

namespace App\Controllers;

use App\Repositories\AuthorRepository;

class ListAuthorsController
{
    public function __invoke($req, $res, $args)
    {
        $authorRepository = new AuthorRepository();
        $listAuthorsAction = new  ListAuthorsAction($authorRepository);
        return $listAuthorsAction($req, $res, $args);
    }
    
}

