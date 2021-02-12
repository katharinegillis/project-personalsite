#!/bin/sh

sed -i "s|fastcgi_pass   phpfpm:9000;|fastcgi_pass   $PHPFPM:9000;|g" /etc/nginx/conf.d/default.conf