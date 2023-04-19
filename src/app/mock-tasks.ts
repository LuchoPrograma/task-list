import {Task} from "./tasks" //Implementamos la interfaz para especificar el tipo de datos aceptados(magia de typescript)
export const TASKS: Task[] = [ //Simulamos una base de datos(especificando el tipo de datos gracias a la interfaz creada) para probar la app. sintaxis JSON
    {
        id: 1,
        text: "Tarea importante 1",
        day: 'Abril 20 a las 10:00',
        reminder: true //si cambiamos el valor a por ejemplo un numero, nos va a dar error porque en la interfaz especificamos que reminder es de tipo booleano

    },
    {
        id: 2,
        text: "Tarea importante 2",
        day: 'Abril 21 a las 20:00',
        reminder: true
    },
    {
        id: 3,
        text: "Tarea importante 3",
        day: 'Abril 23 a las 16:00',
        reminder: false
    },
    {
        id: 4,
        text: "Tarea importante 4",
        day: 'Abril 23 a las 19:00',
        reminder: false
    }
]