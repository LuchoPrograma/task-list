export interface Task{ //Creamos una interfaz para promover la consistencia y evitar errores
    id?: number; //Cuando creamos la id podria no venir (number | undefined)
    text: string;
    day: string;
    reminder: boolean
}