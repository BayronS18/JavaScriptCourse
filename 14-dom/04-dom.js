// ===================================================
// APUNTES: Inserción, Reemplazo y Eliminación en el DOM
// ===================================================

// 1. CREACIÓN Y POSICIONAMIENTO BÁSICO
const elemento = document.createElement('p');
elemento.textContent = 'Elemento creado';

// Insertar al final del body (Último hijo)
document.body.append(elemento);

// Mover al principio del body (Primer hijo - NO borra a los demás)
document.body.prepend(elemento);

// Eliminar el elemento del DOM (Método moderno)
elemento.remove();


// 2. REEMPLAZO DE NODOS
const div = document.createElement('div');
div.textContent = 'Soy un texto nuevo';

// Opción Moderna: Se ejecuta desde el elemento que será reemplazado
elemento.replaceWith(div);

// Opción Tradicional: Se ejecuta desde el PADRE (Sintaxis: replaceChild(NUEVO, VIEJO))
// document.body.replaceChild(div, elemento);


// 3. MÉTODOS TRADICIONALES DEL PADRE
document.body.appendChild(elemento);            // Insertar un solo nodo al final
document.body.removeChild(elemento);            // Eliminar un hijo específico
document.body.insertBefore(div, elemento);      // Insertar 'div' JUSTO ANTES de 'elemento'


// 4. POSICIONAMIENTO ULTRA PRECISO (insertAdjacentElement)
// insertAdjacentElement(posicion, elemento)

document.body.insertAdjacentElement('beforebegin', div); // Fuera del body, ARRIBA
document.body.insertAdjacentElement('afterbegin', div);  // Dentro del body, PRIMER hijo
document.body.insertAdjacentElement('beforeend', div);   // Dentro del body, ÚLTIMO hijo
document.body.insertAdjacentElement('afterend', div);    // Fuera del body, ABAJO

// Variantes útiles:
// document.body.insertAdjacentText('beforeend', 'Texto sin etiquetas');
// document.body.insertAdjacentHTML('beforeend', '<p>HTML formateado directo</p>');