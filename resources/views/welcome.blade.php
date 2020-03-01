<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Capixaba Alugue</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet"
        type="text/css">
        <link href="{{mix('css/app.css')}}" rel="stylesheet"
        type="text/css">
        <!-- csrf -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>
       <div id="app">
           <router-view></router-view>
       </div>
        <script>
            var baseUrl = '{{ env('MIX_BASE_URL') }}'
        </script>
        <script src="{{mix('js/app.js')}}"></script>
    </body>
</html>
