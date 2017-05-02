<?php

namespace App\Controllers;

use PHPUnit\Framework\TestCase;
use Illuminate\Database\Eloquent\Collection;
use App\Repositories\AuthorRepository;
use \Slim\Http\Request as Request;
use \Slim\Http\Response as Response;
use \Slim\Http\Environment;
use App\Models\Author;

class ListAuthorsActionTest extends TestCase
{
    /**
     * @test
     */
    function getAllUsersInTheDatabase()
    {
        // 1. init ListAuthorsAction
        $authorRepository = $this->getMockBuilder(AuthorRepository::class)
            ->setMethods(['all'])
            ->disableOriginalConstructor()
            ->getMock();
        $authors = new Collection([
            new Author(['id'=>1, 'name' => 'test1']),
            new Author(['id'=>2, 'name' => 'test2']),
            new Author(['id'=>3, 'name' => 'test3'])
        ]);
        $authorRepository->expects($this->once())
            ->method('all')
            ->willReturn($authors);
        $action = new ListAuthorsAction($authorRepository);

        // 2. invoke ListAuthorsAction
        $request = Request::createFromEnvironment(Environment::mock());
        $response = new Response();
        $arguments = array();
        $returnedResponse = $action($request, $response, $arguments);

        $expectedResponse = $authors->toJson();

        $this->assertSame((string)$returnedResponse->getBody(), $expectedResponse);
    }
}
