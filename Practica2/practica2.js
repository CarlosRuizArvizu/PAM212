const persona = {
nombre: "Ivan Isay",
edad: 37,
direccion: {
ciudad: "Qro",
pais: "MX" 
    }
};


const { nombre, edad, direccion: { ciudad } } = persona;

const mensaje = "Me llamo " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.direccion.ciudad + ".";

console.log(mensaje);