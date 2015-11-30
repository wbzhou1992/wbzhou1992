# wbzhou1992
this is my first blog

$git clone git@github.com:wbzhou1992/wbzhou1992.git//本地如果没有远程代码执行不然就忽略。
$cd .ssh/username.github.com//定位到你的blog目录下
$git pull origin master/gh-pages//先同步远程文件，后面的参数会自动连接到你的远程文件
$git status//查看本地自己修改了多少文件
$git add ./-A//添加远程不存在的git文件
$git commit -a -m "change index.html"//添加描述信息
$git push origin master/gh-pages//更新远程服务器
