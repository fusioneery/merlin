# Merlin React Native Mobile App

### О проекте

Мобильное приложение для получения анализа личностей на основе фото.

### Технологии

- TypeScript - строгая типизация, проверка кода до рантайма
- React-Navigation (навигация, максимально близкая к нативной)
- Emotion, Polished, Styled-tools - набор библиотек для построения легко-масштабируемого и переиспользуемой библиотеки компонентов
- MobX - state-manager (не надо писать много бойлерплейта)
- Detox - E2E testing
- Jest - unit testing

### Структура проекта

- api - общение с сервером
- features - модули проекта, смысловые единицы [см. описание feature-driven подхода](https://sova.dev/ru/application-structure/)
- lib - внутренняя библиотека проекта, хелперы, утилиты итд
- screens - экраны
- ui - набор переиспользуемых, кастомизируемых компонентов, вписывающихся в общую дизайн-систему
