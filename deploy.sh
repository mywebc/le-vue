rm -rf dist
yarn build
cd dist
git init
git add .
git commit -m "update"
git remote add gitee git@gitee.com:ChenXiaoLaNi/le-ui-docs.git
git remote add origin git@github.com:mywebc/le-vue.git
git push -f -u origin master:docs
git push -f -u gitee master
cd -
echo https://chenxiaolani.com/le-vue/index.html#/