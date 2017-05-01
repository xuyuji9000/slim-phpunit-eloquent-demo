<?php

namespace App\Controllers;
use App\Repositories\AuthorRepository;

final class ListAuthorsAction
{
    private $authorRepository;

    public function __construct(AuthorRepository $authorRepository)
    {
        $this->authorRepository = $authorRepository;
    }

    public function __invoke($req, $res, $args)
    {
        return $res->withJson($this->authorRepository->all());
    }
}
