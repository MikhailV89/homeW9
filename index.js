document.write('<p>Вивести на сторінку в один рядок через кому числа від 10 до 20.</p>');
firstValue = 10;
firstResult = '';

while (firstValue <= 20) {
    firstResult += firstValue + ', ';
    firstValue++;
}

document.write(`${firstResult}`);


document.write('<p>Вивести квадрати чисел від 10 до 20.</p>');
secondValue = 10;
secondResult = '';

while (secondValue <= 20) {
    secondResult += (secondValue * secondValue) + ', ';
    secondValue++;
}

document.write(`${secondResult}`);

document.write('<p>Вивести таблицю множення на 7.</p>');
value = 1;
result = '';

while (value <= 10) {
    result = value * 7;
    document.write(`${value} x 7 = ${result}<br>`);
    value++;
}

document.write('<p>Знайти суму всіх цілих чисел від 1 до 15.</p>');
value = 1;
sum = 0;

while (value <= 15) {
    sum += value;
    value++;
    
}
document.write(`${sum}`);

document.write('<p>Знайти добуток усіх цілих чисел від 15 до 35.</p>');
thirdValue = 15;
thirdResult = 1;

while (thirdValue <= 35) {
    thirdResult *= thirdValue;
    thirdValue++;
}
document.write(`${thirdResult}`);


document.write('<p>Знайти середнє арифметичне всіх цілих чисел від 1 до 500.</p>');
valueArithmetic = 1;
arithmetic = 0;

while (valueArithmetic <= 500) {
    arithmetic += valueArithmetic;
    valueArithmetic++;
}
resultArithmetic = arithmetic / 500;
document.write(`${resultArithmetic}`);

document.write('<p>Вивести суму лише парних чисел в діапазоні від 30 до 80.</p>');
fourthValue = 30;
fourthResult = 0;

do {
    if (fourthValue % 2 === 0) {
        fourthResult += fourthValue;
    }
    fourthValue++;
} while (fourthValue <= 80);
document.write(`${fourthResult} <br>`);

document.write('<p>Вивести всі числа в діапазоні від 100 до 200 кратні 3.</p>');
fifthValue = 100;
fifthResult = '';

do {
    if (fifthValue % 3 === 0) {
        fifthResult += fifthValue + ', ';
    }
    fifthValue++;
} while (fifthValue <= 200);

document.write(`${fifthResult}`);

document.write('<p>Дано натуральне число. Знайти та вивести на сторінку всі його дільники.</p>');
entNumber = +prompt('Enter natural number');
numValue = 1;
number = 0;
sumNumber = 0;
resultNumber = '';

do {
    if (entNumber % numValue === 0) {
        resultNumber += numValue + ' ';
    }
    if ( entNumber % numValue === 0 && numValue % 2 === 0) {
        number++;
        sumNumber += numValue;
    }
    numValue++;
} while (numValue <= entNumber);

document.write(`Ви ввели номер - ${entNumber} його дільники - ${resultNumber}`);

document.write('<p>Визначити кількість його парних дільників.</p>');
document.write(`Кількість його парних дільників - ${number}`);

document.write('<p>Знайти суму його парних дільників.</p>');
document.write(`Сума його парних дільників - ${sumNumber}`);

document.write('<p>Повна таблиця множення</p>');
valueFirst = 1;

do {
    valueSecond = 1;
    do {
        document.write(`${valueFirst} x ${valueSecond} = ${valueFirst * valueSecond}<br>`);
        valueSecond++;
    } while (valueSecond <= 10);
    valueFirst++;
} while (valueFirst <= 10);