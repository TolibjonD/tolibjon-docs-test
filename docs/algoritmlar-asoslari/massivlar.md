---
sidebar_position: 4
---

# Massivlar va Ob'ektlar

**Massiv** – bir nechta ma'lumotni bitta o'zgaruvchida saqlash uchun ishlatiladi.

Bu darsda biz **massivlar** va **ob'ektlar** bilan ishlashni o'rganamiz. Massivlar bir nechta qiymatlarni saqlashga yordam beradi, ob'ektlar esa murakkab ma'lumotlarni tashkil etish uchun ishlatiladi.

## Massivlar

**Massiv** – bir nechta ma'lumotni bitta o'zgaruvchida saqlash uchun ishlatiladi. Massivning har bir elementi indekslanadi va ular bir xil turdagi ma'lumotlarni o'z ichiga olishi mumkin.

### Massiv yaratish

Massivni yaratish uchun `[]` qavslaridan foydalaniladi.

```javascript
let fruits = ["olma", "banan", "olcha"];
console.log(fruits); // ["olma", "banan", "olcha"]
```

## Massivga qiymat qo'shish

- Massivga yangi qiymatlarni qo'shish uchun push() metodidan foydalanish mumkin.

```javascript
fruits.push("xurmo");
console.log(fruits); // ["olma", "banan", "olcha", "xurmo"]
```

## Massivdan qiymat olish

- Massivdan qiymat olish uchun indeksdan foydalanamiz.

```javascript
console.log(fruits[1]); // "banan"
```

## Massivni aylantirish

- Massivni aylantirish uchun for tsiklini ishlatish mumkin.

```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

## Ob'ektlar

- Ob'ektlar dasturlarda ma'lumotlarni kalit-qiymat juftliklarida saqlash uchun ishlatiladi. Ob'ektlar yordamida biz murakkab ma'lumotlarni tartibga solishimiz mumkin.
  Ob'ekt yaratish

- Ob'ektni yaratish uchun {} qavslaridan foydalanamiz.

```javascript
let person = {
  name: "Ali",
  age: 25,
  city: "Tashkent",
};
console.log(person); // { name: "Ali", age: 25, city: "Tashkent" }
```

## Ob'ektdan qiymat olish

- Ob'ektdan qiymat olish uchun kalitni ishlatamiz.

```javascript
console.log(person.name); // "Ali"
```

## Ob'ektga yangi kalit-qiymat qo'shish

- Ob'ektga yangi kalit-qiymat qo'shish uchun to'g'ridan-to'g'ri yozish mumkin.

```javascript
person.country = "Uzbekistan";
console.log(person); // { name: "Ali", age: 25, city: "Tashkent", country: "Uzbekistan" }
```
