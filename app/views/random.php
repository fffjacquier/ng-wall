<section class="nothome">
    <h2>10 random images</h2>
    <ul>
        <li ng-repeat="item in shuffledList" style="display:inline-block;height:177px;">
            <a href="/detail/{{item.id}}">
                <div class="all"><img ng-src="/{{item.src}}" alt="{{item.place}} - {{item.date}}" height="166" /></div>
            </a>
        </li>
        <li><a href="<?php echo $BASE_URL; ?>/random">10 others?</a></li>
    </ul>
</section>