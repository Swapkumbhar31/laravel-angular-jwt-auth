<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## LARAVEL ANGULAR JWT AUTH

This is ready repo to start project with laravel v7 and Angular v10 project. Project uses Laravel as backend service and Angular as a frontend service.
Both projects run on same host in production mode. Laravel apis are authenticated with JWT token. for more information [click here](https://jwt-auth.readthedocs.io/)

## Requirements

- PHP >= 7.2
- Node >= 10

## How to use

- Clone the repository with __git clone__
- Copy __.env.example__ file to __.env__ and edit database credentials there
- Run __composer install__
- Run __php artisan key:generate__
- Run __php artisan jwt:secret__
- Run __php artisan migrate --seed__
- Run __php artisan serve__ for backend service in dev mode
- Run __ng serve__ for angular service in dev mode
- Run __php artisan production__ for production mode

## Screenshots

![Home Page](/screenshots/screencapture-1.png?raw=true "Screenshot One")

![Login Page](/screenshots/screencapture-2.png?raw=true "Screenshot Two")

![Register Page](/screenshots/screencapture-3.png?raw=true "Screenshot Three")

![Profile Page](/screenshots/screencapture-4.png?raw=true "Screenshot Four")


- - - - -

## License

Feel free to use and re-use any way you want.

## Issues

Feel free to raise issue 
