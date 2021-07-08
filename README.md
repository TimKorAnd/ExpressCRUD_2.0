# ExpressCRUD_2.0

Week 4, task#1
Олексій Моторний
•
Jul 3 (Edited Jul 3)
Due Jul 9
Дописати існуючий або написати новий nodeJs server де буде 3 - и сутності:
user = {
name: String,
email: String,
password: String,
roomId: ObjectId,
}
room = {
title: String,
ownerId: ObjectId,
description: String,
usersId: [ObjectId],
}
message = {
ownerId: ObjectId,
roomId: ObjectId,
text: String,
}
CRUD для кожної з них + валідація даних на рівні роутів.
Додатково написати роути:
- POST users/join-to-room
- POST users/leave-from-room
  І написати логіку дня них.
  Розширити функціонал:
  вибрати всі повідомлення для конкретного користувача
  вибрати всіх користувачів для конкретної кімнати
  вибрати всі кімнати які створив користувач
  Виборки із зв’язками можна зробити “нативним способом” можна за допомогою populate(https://mongoosejs.com/docs/populate.html)
