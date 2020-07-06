﻿<h1 align="center"> Hommy </h1>

<p align="center"> Projeto Final do treinamento técnico - EJCM. </p>

<h3> Após clonar, para o aplicativo funcionar corretamente: </h3>

<h4> * No arquivo .env, colar: </h4>

        APP_NAME=Hommy
        APP_ENV=local
        APP_KEY=base64:cYxFgkNBqEl23TGipRBaN1JbVvQDoGSNqgH7R+IHrAk=
        APP_DEBUG=true
        APP_URL=http://localhost
        
        LOG_CHANNEL=stack

        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=bd_hommy
        DB_USERNAME=root
        DB_PASSWORD=

        BROADCAST_DRIVER=log
        CACHE_DRIVER=file
        QUEUE_CONNECTION=sync
        SESSION_DRIVER=file
        SESSION_LIFETIME=120

        REDIS_HOST=127.0.0.1
        REDIS_PASSWORD=null
        REDIS_PORT=6379

        MAIL_DRIVER=smtp
        MAIL_HOST=smtp.gmail.com
        MAIL_PORT=587
        MAIL_USERNAME=aluguelrepublicaoficial@gmail.com
        MAIL_PASSWORD=viwqvvnivqigxgpu
        MAIL_ENCRYPTION=tls
        MAIL_FROM_ADDRESS=aluguelrepublicaoficial@gmail.com
        MAIL_FROM_NAME="${APP_NAME}"

        AWS_ACCESS_KEY_ID=
        AWS_SECRET_ACCESS_KEY=
        AWS_DEFAULT_REGION=us-east-1
        AWS_BUCKET=

        PUSHER_APP_ID=
        PUSHER_APP_KEY=
        PUSHER_APP_SECRET=
        PUSHER_APP_CLUSTER=mt1

        MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
        MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

<h4> * Na pasta back: </h4>

```bash
composer install
cp .env.example .env
Criar o BD no phpMyAdmin
Mudar o nome do BD  no .env de acordo com o criado anteriormente
php artisan key:generate
php artisan migrate:fresh --seed
php artisan passport:install
php artisan serve
```

<h4> * Na pasta front: </h4>

```bash
npm install
ionic serve
```
<h4 align="center">
        <p> Projeto por Gabriele Jandres, Marcele Lami & Milton Quillinan </p>
</h4>
