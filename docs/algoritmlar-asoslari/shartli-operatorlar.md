---
sidebar_position: 3
---

# Shartli Operatorlar

**Shartli Operatorlar va Tsikllar**

Bu darsda biz dasturlarda **shartli operatorlar** va **tsikllar** bilan ishlashni o'rganamiz. Shartli operatorlar dasturda turli holatlar uchun turli amallarni bajarish imkonini beradi, tsikllar esa bir necha marta bajarilishi kerak bo'lgan amallarni avtomatik ravishda takrorlashga yordam beradi.

## Shartli Operatorlar

**Shartli operatorlar** yordamida biz dasturda shartlarga asoslangan qarorlar qabul qilamiz. Bu operatorlar yordamida dastur ma'lum shartlar bajarilganida yoki bajarilmaganida turli amallarni bajarishi mumkin.

### 1. **if** va **else** operatorlari

- **`if`**: Agar berilgan shart haqiqat bo'lsa, amallar bajariladi.
- **`else`**: Agar `if` shart bajarilmasa, boshqa amallar bajariladi.

```javascript
let x = 5;

if (x > 3) {
  console.log("x 3 dan katta");
} else {
  console.log("x 3 dan kichik yoki teng");
}
```

### 2. else if operatori

Agar bir nechta shartlarni tekshirish kerak bo'lsa, else if operatori ishlatiladi.

```javascript
let x = 5;

if (x > 10) {
  console.log("x 10 dan katta");
} else if (x > 3) {
  console.log("x 3 dan katta, lekin 10 dan kichik");
} else {
  console.log("x 3 dan kichik");
}
```

## Tsikllar

- Tsikl yordamida biz bir nechta marta bajarilishi kerak bo'lgan amallarni takrorlashimiz mumkin. Tsikl ishlatish orqali dasturimizni yanada samarali va qisqa yozish mumkin.

### 1. for tsikli

- for tsikli ma'lum bir shart bajarilguncha takrorlanadi. Bu tsikl ko'pincha takrorlanadigan sonlarni ishlatish uchun ishlatiladi.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
```

### 2. while tsikli

- while tsikli shart haqiqiy bo'lsa takrorlanadi.

```javascript
let i = 0;
while (i < 5) {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
}
```

### 3. do...while tsikli

- do...while tsikli, shart tekshirilishidan avval, kamida bir marta bajariladi.

```javascript
let i = 0;
do {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
} while (i < 5);
```
