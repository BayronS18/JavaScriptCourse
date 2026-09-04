//ejercicio 9 
/**
 * Unificar las estructuras de usuarios y user
 * Fusionar los array
 * Ordenar por edad
 * Crear plantilla HTML
 * <li>Nombre: name, Edad: age</li>
 * Imprimir la lista en consola
 */
const usuarios = [
    {edad: 17, nombre: 'Bayron', plan: 'premium'},//
    {edad: 13, nombre: 'Miguel', plan: 'free'},
    {edad: 25, nombre: 'Paola', plan: 'gold'},
    {edad: 32, nombre: 'Felipe', plan: 'free'},
];

const users = [
    {age: 22, name: 'Michael', membership: 'premium' },
    {age: 32, name: 'Ethan', membership: 'free' },
    {age: 26, name: 'Matew', membership: 'free' },
];



function unificarYCrearLista(listaEspanol, listaIngles){
    const listaInglesNormalizada = listaIngles.map(user => ({
        edad: user.age,
        nombre: user.name,
        plan: user.membership,

    }));
    let nuevaLista = [...listaEspanol, ...listaInglesNormalizada]
    .sort((a, b) => b.edad - a.edad)
    .map(user => `<li>Nombre: ${user.nombre}, Edad: ${user.edad}</li>`)
    .join(`
        `);
    const html = `
    <ul>
        ${nuevaLista}
    </ul>`
    return html;
}
const resultado = unificarYCrearLista(usuarios, users);
console.log(resultado)