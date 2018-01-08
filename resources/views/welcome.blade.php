<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Laravel</title>
</head>

<body>
	<div id="root">

        <p>
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>    
            <router-link to="/example">Go to Example</router-link>    
        </p>

    <!-- ルートアウトレット -->
    <!-- ルートとマッチしたコンポーネントがここへ描画されます -->
    <router-view></router-view>

    </div>
	<script src="/js/app.js"></script>
</body>

</html>
