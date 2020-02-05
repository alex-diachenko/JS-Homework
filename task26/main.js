// 1) Написать регулярное выражение для email 
// например:
// vasiapupkin@gmail.com
// inokentiiivanov@gmail.com
// boriapetrov@mail.ru

/^.+@.+\..+$/.test('vasiapupkin@gmail.com')

// 2) повторяем и пишем регулярочку к

// /product/20

/\/[a-z/]+(2[0-0])$/.test('/product/20')


// /person/10/device/90

/\/[a-z/]+(1[0-0])+[a-z/]+(9[0-0])$/.test('/person/10/device/90')

// 3) Написать регулярочку которая начинается с любой цифры и дальше идет один символ с группы [ghtx] и закнчивается точкой.

/^[0-9]+(g|h|t|x)\./.test('1g.')
