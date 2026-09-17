// ===================================================
// APUNTES: Creación, Contenido, Estilos y Atributos
// ===================================================

// 1. CREACIÓN E INSERCIÓN
const elemento = document.createElement('p');

// 2. MODIFICACIÓN DE CONTENIDO
// ⚠️ Nota: Asignar un nuevo valor borra el contenido anterior.

// elemento.textContent = "Texto plano"; // Recomendado para solo texto (seguro)
// elemento.innerText = "Texto plano";   // Similar a textContent (toma en cuenta el CSS visible)

// Renderiza etiquetas HTML reales:
elemento.innerHTML = "<ul><li>Hola Mundo</li></ul>"; 

// Insertar en la pantalla (al final del <body>):
document.body.append(elemento);


// 3. ESTILOS Y CLASES
// Asignar texto de estilos completo:
elemento.style = 'background-color: red; font-weight: bold';

// Modificar atributos estándar del DOM:
elemento.className = 'parrafo';
elemento.id = 'mi-parrafo';


// 4. ATRIBUTOS PERSONALIZADOS
// ❌ No se refleja en el HTML de la pantalla (solo en el objeto JS):
// elemento.mipropiedad = 'mi propiedad';

// ✅ Forma correcta de crear/leer atributos HTML personalizados:
elemento.setAttribute('mipropiedad', 'mi propiedad');
const valorAtributo = elemento.getAttribute('mipropiedad');

console.log(valorAtributo); // "mi propiedad"