class inicioPAM {
  ReglamentoPOO() {
    return "\n1. Participación activa en clase \n2. Trabajos en classroom \n3. Entregas completas \n4.Respetar tiempos de entrega \n5.Presentación de trabajo calidad universitaria";
  }

  LineamientosClassroom() {
    return "\n1. Todos los trabajos llevan portada estilo libre: Logo UPQ, tema, datos de alumno, materia\n2. Conclusiones de aprendizaje: Descripción de lo aprendido durante el desarrollo de la actividad";
  }

  FechasdeParciales() {
    return "\nParcial 1: 29/09/2025\nParcial 2: 03/10/2025\nParcial 3: 01/12/2025";
  }

  PorcentajesporParcial() {
    return "\nParcial 1: \n1. Conocimiento: 40%\n2. Desempeño: 20%\n3. Producto: 30%\n4. PI: 10% \nParcial 2: \n1. Conocimiento: 40%\n2. Desempeño: 20%\n3. Producto: 20%\n4. PI: 20% \nParcial 3:\n1. Conocimiento: 20%\n2. Desempeno: 10%\n3. Producto: 40%\n4. PI: 30%";
  }
}

// Creamos un objeto de la clase
const pam = new inicioPAM();

// Funciones que usan los métodos de la clase
function mostrarReglamento() {
  document.getElementById("contenido").innerText = pam.ReglamentoPOO();
}

function mostrarLineamientos() {
  document.getElementById("contenido").innerText = pam.LineamientosClassroom();
}

function mostrarFechas() {
  document.getElementById("contenido").innerText = pam.FechasdeParciales();
}

function mostrarPorcentajes() {
  document.getElementById("contenido").innerText = pam.PorcentajesporParcial();
}
