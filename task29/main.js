// 1) Написать регулярное выражение для email 
// например:
// vasiapupkin@gmail.com
// inokentiiivanov@gmail.com
// boriapetrov@mail.ru

/^.+@.+\..+$/.test('vasiapupkin@gmail.com')

// 2) повторяем и пишем регулярочку к

// /product/20

"/product/20".replace(/\D+/g, "");

// /person/10/device/90

'/person/10/device/90'.match(/[0-9]+/g);

// 3) Написать регулярочку которая начинается с любой цифры и дальше идет один символ с группы [ghtx] и закнчивается точкой.

/^\d[ghtx]\.$/.test('4x.');
