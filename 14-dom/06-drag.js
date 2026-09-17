// ===================================================
// APUNTES: API de Drag and Drop (Arrastrar y Soltar)
// ===================================================

// 1. CREAR EL ELEMENTO ARRASTRABLE
function createDraggable() {
  const span = document.createElement('span');
  span.id = 'elemento-arrastrable';
  span.textContent = 'Arrastrable 📦';
  
  // 💡 Habilita que el elemento se pueda arrastrar
  span.draggable = true;

  // ONDRAGSTART: Se ejecuta al empezar a arrastrar el elemento
  span.ondragstart = (event) => {
    // Forma profesional con dataTransfer (almacena el ID en el evento):
    event.dataTransfer.setData('text/plain', event.target.id);
  };

  return span;
}


// 2. CREAR LA ZONA DONDE SE PUEDE SOLTAR (DROP AREA)
function createDroppableArea() {
  const dropArea = document.createElement('div');
  dropArea.className = 'drop';

  // ONDRAGENTER: El elemento arrastrado ENTRA a la zona
  dropArea.ondragenter = (event) => {
    event.target.style.background = 'yellow';
  };

  // ONDRAGLEAVE: El elemento arrastrado SALE de la zona
  dropArea.ondragleave = (event) => {
    event.target.style.background = '';
  };

  // ONDRAGOVER: Se mueve encima de la zona.
  // ⚠️ PREVENTDEFAULT ES OBLIGATORIO: Cancela el bloqueo nativo del navegador
  // para permitir que la zona sea "soltable".
  dropArea.ondragover = (event) => {
    event.preventDefault();
  };

  // ONDROP: Ocurre cuando SUELTAS el clic dentro de la zona
  dropArea.ondrop = (event) => {
    event.preventDefault();
    
    // Restablecer el color de fondo
    event.target.style.background = '';

    // Recuperar el ID enviado desde la "mochila" dataTransfer:
    const idRecuperado = event.dataTransfer.getData('text/plain');
    const elementoArrastrado = document.getElementById(idRecuperado);

    // Mover el elemento a la nueva zona de destino:
    event.target.appendChild(elementoArrastrado);
  };

  return dropArea;
}


// 3. INSERCIÓN EN EL DOM
const draggable = createDraggable();
const dropArea1 = createDroppableArea();
const dropArea2 = createDroppableArea();

document.body.append(dropArea1, dropArea2, draggable);