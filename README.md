Запуск стандартный: npm start
                    npm build
                    npm deploy (для gh-pages)

Версия Node: 18.16.0
Сторонние библиотеки: 
  styled components,
  axios,react-query,
  typescript,
  craco.

gh-pages: https://vitaliikutsenko.github.io/rollerSoft/#/user

P.s!
Пагинацию реализовал в userDetails, так как слишком скудный пул в /users
Фильтрацию делал с сейвом в useState, чтобы не делать лишних запросов на сервер.
