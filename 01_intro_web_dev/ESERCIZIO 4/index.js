import { format, minutesToHours, weeksToDays, getDay, setDate } from '/node_modules/date-fns/index.js';

const today = new Date();
console.log(format(today, 'yyyy-MM-dd'));

const ore = minutesToHours(180)
console.log(`180 minuti corrispondono a: ${ ore } ore`);

const giorni = weeksToDays(2)
console.log(`2 settimane corrispondono a: ${ giorni } giorni`);

const result = getDay(new Date(2012, 1, 29))
console.log(`${ result }`);

const giornoMese = setDate(new Date(1993, 8, 1), 30)
console.log(giornoMese);