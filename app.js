class Usuario{

    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        console.log(`El nombre completo del usuario es: ${this.nombre} ${this.apellido}`);
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
    }

    countMascotas(){
        console.log(`${this.nombre} tiene ${this.mascotas.length} mascotas`);
    }

    addBook(nombre,autor){
        this.libros.push({nombre:nombre,autor:autor});
    }

    getBookNames(){

        let book =this.libros.map((name)=> name.nombre);
        console.log(`Los libros favoritos de ${this.nombre} son: ${book}`);

        /*let book = [];
        let books = this.libros;
        for(let i = 0; i < books.length;i++){
            book.push(books[i].nombre);
        }
        console.log(`Los libros favoritos de ${this.nombre} son: ${book}`);*/
    }

}

const usuario = new Usuario(
    'Juan David',
    'Perez',
    [{nombre : 'Cien años de soledad', autor : 'Gabriel García Márquez'}],
    ['Perro']
);

usuario.getFullName();
usuario.addMascota('Gato');
usuario.addMascota('Pajaro');
usuario.countMascotas();
usuario.addBook(' Padre Rico - Padre Pobre', 'Robert Kiyosaki');
usuario.addBook(' El Principito', 'Antoine de Saint-Exupéry');
usuario.getBookNames();