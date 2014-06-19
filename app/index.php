<?php
$BASE_URL = 'http://ngwall.dev/';//http://localhost:8080
?>
<!DOCTYPE html>
<html ng-app="parisApp">
<head>
    <meta charset="utf-8"/>
    <title>This is Paris | photos by Francois Jacquier</title>
    <style>
    .debug {border:1px dashed orange;}
    * { margin: 0; padding: 0; box-sizing: border-box;}
    .nothome { padding: 0 1em;}
    ul {
        list-style: none;
        margin-top: 1em;
        width: 100%;
    }
    li {
        clear:both;
        height: 90px;
        padding-left: 1em;
        padding-bottom: 1em;
    }
    a > * {
        float:left;
    }
    img {
        width: 100%;
        max-width: 100%;
        /*padding-left: 1em;*/
    }
    .all {
        /*height: 83px;/*auto*/
        width: 240px;
    }
    p.all {
        padding-left: 1em;
        width: 40%;
    }
    .nav {
        display:inline-block;
        height: auto;
    }
    .simple {
        display:block;
        height: auto;
        padding: 0;
    }
    .searchBar {
        height: 40px;
        font-size: 1.2em;
    }
    .bsearch {
        display: inline;
        width: 100px;
    }
    .qsearch {
        width: 400px;
    }
    .bgImage {
        text-align: center;
        width: 100%;
        height: auto;
        position: absolute;
        top:50px;
        bottom:0;
        padding: 8px;
        background: url('<?php echo $BASE_URL; ?>img/03858.jpg') no-repeat center center     fixed;
        border: 0;
        outline: 0;
    }
    .mapContainer {
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 1em;
        height: 0;
    }
    .mapContainer img {
        max-width: none;
    }
    </style>

</head>

<body>

    <header>
        <ul>
            <li class="nav"><a href="/">Home</a></li>
            <li class="nav"><a href="/random">Random 10</a></li>
            <li class="nav"><a href="/map">Map</a></li>
            <li class="nav"><a href="/all">All</a></li>
            <li class="nav"><a href="/about">About</a></li>
        </ul>    
    </header>
    
    <div ng-view></div>

    <script src="http://maps.google.com/maps/api/js?v=3.exp"></script>
	<script type="text/javascript" src="<?php echo $BASE_URL; ?>lib/angular.js"></script>
	<script type="text/javascript" src="<?php echo $BASE_URL; ?>lib/angular-route.js"></script>
    <script type="text/javascript" src="<?php echo $BASE_URL; ?>lib/ng-map.min.js"></script>

	<script type="text/javascript" src="<?php echo $BASE_URL; ?>js/filters.js"></script>
	<script type="text/javascript" src="<?php echo $BASE_URL; ?>js/controllers.js"></script>
	<script type="text/javascript" src="<?php echo $BASE_URL; ?>js/services.js"></script>
	<script type="text/javascript" src="<?php echo $BASE_URL; ?>js/directives.js"></script>
	<script type="text/javascript" src="<?php echo $BASE_URL; ?>js/app.js"></script>

</body>
</html>