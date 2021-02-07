export class Usuario {

    public id: string;
    public nombre: string;
    public sala: string;

    constructor( id: string ) {
        this.id = id;
        this.nombre = 'sense-nom';
        this.sala = 'sense-sala';
    }

}