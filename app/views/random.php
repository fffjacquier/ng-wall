<section class="nothome">
    <h2>10 random images</h2>
    <ul>
        <li ng-repeat="item in shuffledList" class="gridLi debug">
            <a href="/detail/{{item.id}}">
                <div class="rand"><img ng-src="/{{item.src}}" alt="{{item.place}} - {{item.date}}" height="166" /></div>
            </a>
        </li>
        <li class="gridLi debug" reloadrandom="reloadPage()"></li>
    </ul>
</section>