# Ejercicio HTML + CSS + JS

## Primer paso

Vamos a crear un HTML que tenga:

- Un `div` que envuelva a dos `div`
- El primer `div` va a tener 3 `p` de al menos 20/30 caracteres.
- El segundo `div` va a tener un `h2` y un `div`dentro.
- Y el `div` de dentro del segundo `div`, debe tener dos `span` dentro de al menos una frase.

## Segundo paso

- Al `div`principal le ponemos una `id` que se llame `main`, y con CSS le ponemos `background-color` `pink`. Le ponemos también `color: white`.

```
#main { 
  align-items: center;
  justify-content: space-between;
  ...
}
```

### Tercer paso

Con JS vamos a:

- Seleccionamos el  `div` con `id` `main` y le ponemos `display flex`.

- Todos los `p` que tenemos, vamos a recorrerlos y cambiar su texto de dentro por otra frase que queramos.

- Y por último los dos `span` los buscaremos con JS y añadiremos `display block` y aparte `fontSize 30px`