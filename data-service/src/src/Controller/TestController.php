<?php


namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;

class TestController
{
    public function getData(): Response
    {
        return new Response(
            '<html lang="en_us"><body>/api/data/: getData</body></html>'
        );
    }

    public function getDataProfile(): Response
    {
        return new Response(
            '<html lang="en_us"><body>/api/data/profile: getDataProfile</body></html>'
        );
    }
}