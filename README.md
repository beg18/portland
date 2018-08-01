
1) Install gulp and modules

- Automatic install gulp and all modules: npm install

- OR install gulp and each module by hand

npm install gulp
npm install gulp-watch --save-dev
npm install gulp-autoprefixer --save-dev
npm install gulp-uglify --save-dev
npm install gulp-rigger --save-dev 
npm install gulp-cssnano --save-dev
npm install gulp-less --save-dev
npm install gulp-imagemin --save-dev
npm install rimraf --save-dev

- OR all in one line: npm install gulp gulp-watch gulp-autoprefixer gulp-uglify gulp-rigger gulp-cssnano gulp-less gulp-imagemin rimraf --save-dev

3) run "gulp build" (if in folder "build" you see some files - everything is ok)
4) run "gulp watch" for watching changes on the fly
5) Go to src/i/favicons/manifest.json and change "name": "My Web" to your website name
6)Перед стартом проекта необходимо:

* 
Убедиться что уставновленный node.js и npm. 
Для этого достаточно написать в терминале
> node -v


Если вы видите версию, например, v6.9.2 тогда все ок

> npm -v


Если вы видите версию, например, 4.3.0 тогда все ок

* 
Убедиться что установлен gulp 4 версии, так как если будет меньше - работать не будет. 
Если он не установлен - тогда ставим:

> npm install gulpjs/gulp-cli#4.0 -g

## 
Инструкция для старта проекта:
* 
Склонировать данный репозиторий
> git clone https://github.com/sergeyamator/itvdn-landing.git 

* 