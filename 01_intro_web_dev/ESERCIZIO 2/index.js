const studente = {
    name: 'Nico Gasparro',
    eta: 31,
    Materie: ['Matematica', 'Scienze', 'Filosofia'],
    Indirizzo: {
        strada: 'via padella',
        citta: 'Rimini',
        Stato: 'IT',
        cap: '12345'
    }
};

const {name: nomeStudente} = studente;
const {eta: etaStudente} = studente;
const {Materie:[, Scienze]} = studente;
const {Indirizzo:{strada,citta,Stato}} = studente;

console.log(nomeStudente);
console.log(etaStudente);
console.log(Scienze);
console.log(strada,citta,Stato);
