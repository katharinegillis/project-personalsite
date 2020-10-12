<?php


namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;

class TestController
{
    public function getAuth(): Response
    {
        return new Response(
            '<html lang="en_us"><body>/api/auth/: getAuth</body></html>'
        );
    }

    public function getAuthProfile(): Response
    {
        return new Response(
            '<html lang="en_us"><body>/api/auth/profile: getAuthProfile</body></html>'
        );
    }
}