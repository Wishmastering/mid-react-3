Crea una aplicacion para buscar peliculas

APIs a usar:

- https://www.omdbapi.com/
- API_KEY: 4287ad07 // e1f20ea6 <- Mi llave

-- http://www.omdbapi.com/?apikey=e1f20ea6&s=star

Requerimientos ->

- Necesita mostrar un input para buscar la pelicula y un boton para buscar.

- Lista las peliculas encontradas y muestra el titulo, a;o y poster

- controlar inputs

- Manejar errores para ->

a. Si el string es vacio
b. Si solo hay numeros
c. Si es menor a 3 caracteres

- map de lo encontrado

- Haz que las peliculas se muestren en un grid responsive.

-- fetch (progressing)

Primera iteracion:

- Evitar que se haga la misma busqueda dos veces seguidas

- crear un sort por orden alfabetico

- Haz que el sort solo se ejecute cuando cambien las peliculas a mostrarse (dependencia)

✅ Haz que la busqueda se haga automaticamente al escribir

✅ Evita que se haga la busqueda continuamente al escribir (debounce)

<!-- Bairesdev -->
