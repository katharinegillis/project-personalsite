<?php


namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;

class TestController
{
    public function getUser(): Response
    {
        return new Response(
            '<html lang="en_us"><body>/api/user/: getUser</body></html>'
        );
    }

    public function getUserProfile(): Response
    {
        return new Response(
            '<html lang="en_us"><body>/api/user/profile: getUserProfile</body></html>'
        );
    }
}