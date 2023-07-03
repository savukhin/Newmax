# Тестовое задание Ньюмакс

Задача: Написать NodeJS сервис, который будет возвращать JSON массив объектов, содержащих информацию об остатках на складе "Казань WB", информацию тянуть с сайта wildberries.ru, поля: Артикул, [Размер 1, Размер 2... Размер N] ( Например { Art: 138593051, "85E": 4, "100E": 14 ... }). Артикулы:  138593051, 94340317, 94340606, 138590435, 138607462, 94339119, 94339244.

## Запуск

1. С помощью node js
```[bash]
git clone https://github.com/savukhin/Newmax.git
cd Newmax
npm install
npm start
```
2. С помощью Docker
```[bash]
docker build -t newmax .
docker run newmax
```