# Prueba técnica frontend Junior.
Cuando carga cliente, front-end, dispara un useEffect() haciendo un fetch a una APIRESTful, la misma retorna una frase de michi aleatoria de una DB que contiene frases de michis. 
La frase que retorna el fetch la dividimos en dos partes, 
parte 1: las tres paralabras primeras
parte 2: el resto
utilizamos la parte 1 para hacer otro fetch de imagenes de michis con esas 3 palabras.

APIs:

- [x] Facts Random: https://catfact.ninja/fact
- [x] Imagen random: https://cataas.com/cat/says/hello

- [x] Recupera un hecho aleatorio de gatos de la primera API
- [x] Recuperar las 3 primeras palabra del hecho
- [x] Muestra una imagen de un gato con la primera palabra.
