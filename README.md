# Feature Sliced Design templates

Данный проект является шаблоном react-приложения.
В проекте применяется Feature Sliced Design архитектура.
Для удобства использования в каждой папке добавлено краткое описание назначения.

## Краткое описание методологии

Проект на FSD состоит из слоев (layers), каждый слой состоит из слайсов (slices) и каждый слайс состоит из сегментов (segments).

![Feature Sliced Design](https://github.com/AvtsynovS/fsd_templates/blob/feat/first-settings-project/assets/fsd.jpg)

### :pushpin: Слои

Слои стандартизированы во всех проектах и расположены вертикально. Модули на одном слое могут взаимодействовать лишь с модулями, находящимися на слоях строго ниже.

`app` настройки, стили и провайдеры для всего приложения.

`pages` композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов.

`widgets (виджеты)` — композиционный слой для соединения сущностей и фич в самостоятельные блоки (например, IssuesList, UserProfile).

`features (фичи)` — взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя. (например, SendComment, AddToCart, UsersSearch)

`entities (сущности)` — бизнес-сущности. (например, User, Product, Order)

`shared` — переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса. (например, UIKit, libs, API)

### :pushpin: Cлайсы

Разделяют код по предметной области. Они группируют логически связанные модули, что облегчает навигацию по кодовой базе.
Слайсы не могут использовать другие слайсы на том же слое, что обеспечивает высокий уровень связности при низком уровне зацепления.

### :pushpin: Сегменты

Каждый слайс состоит из сегментов.
Это маленькие модули, главная задача которых — разделить код внутри слайса по техническому назначению.
Самые распространенные сегменты — ui, model (store, actions), api и lib (utils/hooks),
но в вашем слайсе может не быть каких-то сегментов, могут быть другие, по вашему усмотрению.

В большинстве случаев рекомендуется располагать api и config только в shared-слое.

### Public API

Каждая сущность методологии проектируется как удобный в использовании и интеграции модуль.

Структура модуля должна иметь единую точку входа, предоставляющую публичный интерфейс index.ts
В данном файле необходимо произвести export всех данных из модуля,
которыми смогут пользоваться другие разработчики.
В нём же необходимо произвести переименование сущностей, чтобы избежать коллизии имён в дальнейшем.
Доступ к модулю можно получить только к данным, доступным через index.ts
Доступ к остальным данным модуля должен быть запрещен через правила ESlint

`Проблема`
Из-за реэкспорт, то, что мы делаем в index.ts хуже работает код-сплиттинг.
В таком случае может возникнуть ситуация, когда модуль не будет использовать возможности
из другого модуля (auth), но ему всё-равно придётся добавлять данные из этого модуля в чанк.

`Решение`
В webpack можно настроить точечную обработку по модульно,
чтобы убрать всё лишнее и уменьшить размер чанков и бандла в целом.

### Запросы в БД и хранение данных

Для работы с БД используется библиотека `Axios`.

В качестве стейт-менеджера в проекте используется `Redux toolkit`.
Для удобной работы с асинхронными запросами и в случаях, когда работа с данными требует изменения в нескольких слайсах одновременно, используется extraReducers.

Согласно рекомендациям FSD:

- Thunks рекомендуется размещать в слоях feature и ниже.
- Reducers & работа с API рекомендуется размещать в слоях Pages и ниже.

### ESlint settings

В проекте настроен линтер ESlint, файл конфигурации находится в корне проекте `.eslintrc.js`

### TODO list

- ✅️ Описание проекта в README.md
- ✅️ Слой app
- [ ] Слой pages
- [ ] Слой widgets
- [ ] Слой features
- [ ] Слой entities
- [ ] Слой shared
- ✅️ Запросы в БД и хранение данных
- ✅️ Axios
- ✅️ Store (на примере Redux Toolkit)
- [ ] RTK API
- [ ] React query API
- ✅️ Роутинг, приватный роутинг
- ✅️ Обработчик ошибок
- [ ] Локализация
- [ ] Темизация
- [ ] Валидация
- [ ] Типизация
- [ ] Hooks & HOC
- [ ] Уведомления
- [ ] Авторизация и токены
- [ ] webpack
- ✅️ Env
- ✅️ Prettier settings
- ✅️ ESlint settings
- [ ] StyleLint settings

### Feature Sliced Design документация

[Feature Sliced Design](https://feature-sliced.design/ru/docs)
