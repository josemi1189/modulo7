import { variable } from "../models/modelo";
import { generaNumAleatorio, gestionarEstadoPartida, obtenerPuntosCarta } from "./motor";
import { vi } from "vitest";



describe('Gestión del estado de la partida', () => {

   it("Devuelve 'seguir_jugando' si obtiene menos de 7.5 puntos", () => {
      // Arrange
      const resultadoEsperado = 'seguir_jugando';
      vi.spyOn(variable, 'puntuacion', 'get').mockReturnValue(4);
      // Act
      const resultado = gestionarEstadoPartida();

      // Assert
      expect(resultado).toBe(resultadoEsperado);
   }); 

   it("Devuelve 'ganar' si obtiene 7.5 puntos", () => {
      // Arrange
      const resultadoEsperado = 'ganar';
      vi.spyOn(variable, 'puntuacion', 'get').mockReturnValue(7.5);
      // Act
      const resultado = gestionarEstadoPartida();

      // Assert
      expect(resultado).toBe(resultadoEsperado);
   });

   
   it("Devuelve 'perder' si supera los 7.5 puntos", () => {
      // Arrange
      const resultadoEsperado = 'perder';
      vi.spyOn(variable, 'puntuacion', 'get').mockReturnValue(8);

      // Act
      const resultado = gestionarEstadoPartida();

      // Assert
      expect(resultado).toBe(resultadoEsperado);
   });

});

describe('generaNumAleatorio', () => {
   
   it ("Número aleatorio correcto para obtener el palo de cartas", () => {
      // Arrange
      const resultadoEsperado = 2;
      vi.spyOn(Math, 'random').mockReturnValue(0.6);

      // Act
      // Genera número aleatorio con Math.Random() * tamaño array.
      //    -> 4 es el tamaño de array de palos
      //    -> 10 el máximo de números
      const resultado = generaNumAleatorio(4);

      // Assert
      expect(resultado).toBe(resultadoEsperado);

   });
      it ("Número aleatorio correcto para obtener número de la carta", () => {
      // Arrange
      const resultadoEsperado = 9;
      vi.spyOn(Math, 'random').mockReturnValue(0.90);

      // Act
      // Genera número aleatorio con Math.Random() * tamaño array.
      //    -> 4 es el tamaño de array de palos
      //    -> 10 el máximo de números
      const resultado = generaNumAleatorio(10);

      // Assert
      expect(resultado).toBe(resultadoEsperado);

   });
});

describe("obtenerPuntosCarta", () => {

   it ("Comprueba puntuación de la carta 5", () => {
      // Arrange
      const resultadoEsperado = 5;   

      // Act
      const resultado = obtenerPuntosCarta(5);

      // Assert
      expect(resultado).toBe(resultadoEsperado);
   });

   it ("Comprueba puntuación de la carta 10", () => {
      // Arrange
      const resultadoEsperado = 0.5;   

      // Act
      const resultado = obtenerPuntosCarta(10);

      // Assert
      expect(resultado).toBe(resultadoEsperado);
   });
   
   it ("Comprueba puntuación de la carta 12", () => {
      // Arrange
      const resultadoEsperado = 0.5;   

      // Act
      const resultado = obtenerPuntosCarta(12);

      // Assert
      expect(resultado).toBe(resultadoEsperado);
   });
});







/*
describe("Confirma que genera números aleatorios correctamente", () => {
   it("Números aleatorios para elegir palo", () => {

   });
});
*/