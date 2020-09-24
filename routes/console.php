<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->describe('Display an inspiring quote');

Artisan::command('production', function () {
    $this->comment('Setup For project');
    $this->comment('-------------------------------------------------');
    $this->comment('Installing Angular dependency');
    exec('npm i');
    $this->comment('Installed Angular dependency');
    $this->comment('-------------------------------------------------');
    $this->comment('Building Angular Project');
    exec('ng build --prod');
    $this->comment('Build Angular Project');
    $this->comment('-------------------------------------------------');
    $this->comment('Copying resource files');
    exec('rm -rf public/*.js');
    exec('rm -rf  public/*.css');
    exec('rm -rf  public/*.ico');
    exec('cp -R dist/* public/');
    exec('rm public/index.html');
    exec('cp dist/index.html resources/views/index.blade.php');
    $this->comment('Copied resource files');
});
