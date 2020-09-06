const firstName = 'Wioleta';
const age = 36 ;

console.log(`Hej cieszę się,że zagościłeś na mojej stronie. Nazywam się ${firstName} i mam ${age} lat.`);



const greet = (age, firstName) => {
    console.log(`Witam Cię na mojej stronie. Mam na imię ${firstName}  i mam ${age} lat.`);
}

greet(36, 'Wioleta');