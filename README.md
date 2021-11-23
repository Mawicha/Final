# Pokedex

Pokedex que permite ver 3 características de 151  pokemones:
Type, height, weight.

## Vista principal

Incluye una lista/tabla/tablero de elementos una petición GET 
Los elementos provienen de la integración de una API externa 
### https://pokeapi.co/api/v2/pokemon?limit=151
Acciones principales: 
Filtrado por medio del nombre de cada pokemon
Consultar las características de cada pokemon
![image](https://user-images.githubusercontent.com/36935788/143145332-d16559c1-d89e-4e6e-a928-8ced5d34a6f8.png)

## Vista de Detalle

Son visibles las características de cada pokémon seleccionado 
![image](https://user-images.githubusercontent.com/36935788/143145420-f84cc9a4-d135-451a-9370-68e2db641dad.png)

## Caracteristicas de Diseño

### Mensajes de estado (Error/Loading)
Error aparece al haber algún error con la conexión a la API
Loading aparece al procesar las llamadas a la API como cuando se hace la busqueda de un pokemon
![image](https://user-images.githubusercontent.com/36935788/143145758-0c50a5bf-38ed-4784-b872-6738cbce2e62.png)

### Diseño responsivo
Diseño amigable para computadoras y dispositivos móviles
![image](https://user-images.githubusercontent.com/36935788/143146042-b9917e59-7955-47c7-883a-c2edfd95601e.png)

## App Demo
### https://pokedex-daw.netlify.app/
