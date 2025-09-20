const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Maria", edad: 28 }
];

const personaLuis = personas.find(function(persona) {
  return persona.nombre == "Luis";
});
console.log("Persona encontrada: " + personaLuis.nombre + ", edad: " + personaLuis.edad);


personas.forEach(function(persona) {
  console.log(persona.nombre + " tiene " + persona.edad + " años");
});

const totalEdades = personas.reduce(function(acumulador, persona) {
  return acumulador + persona.edad;
});
console.log("Suma de todas las edades: " + totalEdades);
