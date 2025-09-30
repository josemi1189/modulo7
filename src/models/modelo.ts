
export type EstadoPartida = "ganar" | "perder" | "seguir_jugando";

interface Variables {
   puntuacion:number,
   paloCartasMesa:number[],
   cartasMesa:number[],
   estadoPartida: EstadoPartida,
};

interface CartasBaraja {
   copas: number[];
   oros: number[];
   bastos: number[];
   espadas: number[];
}

export type Imagen = {
   src?: string,
   alt?: string,
};
export type Carta = {
   nombrePalo: string,
   numeroCarta: number,
}


export const variable:Variables = {

   puntuacion: 0,
   paloCartasMesa: [],   // Guarda el palo de cada carta repartida
   cartasMesa: [],       //Guarda el número de cada carta repartida
   estadoPartida: "seguir_jugando",
}

export const baraja:CartasBaraja = {
      copas: [],
      oros: [],
      bastos: [],
      espadas: [],
   }

export const palos:string[]= ['copas', 'oros', 'bastos', 'espadas'];

// Propiedades del objeto utilizado en cambiaPropiedadesImagen()
export const urlImages:string= "./src/images";