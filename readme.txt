
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
6)����� ������� ������� ����������:

* 
��������� ��� �������������� node.js � npm. 
��� ����� ���������� �������� � ���������
> node -v


���� �� ������ ������, ��������, v6.9.2 ����� ��� ��

> npm -v


���� �� ������ ������, ��������, 4.3.0 ����� ��� ��

* 
��������� ��� ���������� gulp 4 ������, ��� ��� ���� ����� ������ - �������� �� �����. 
���� �� �� ���������� - ����� ������:

> npm install gulpjs/gulp-cli#4.0 -g

## 
���������� ��� ������ �������:
* 
������������ ������ �����������
> git clone https://github.com/sergeyamator/itvdn-landing.git 

* 