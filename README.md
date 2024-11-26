# Prueba Técnica Full Stack - Frontend Angular

Este proyecto es una aplicación Angular que permite buscar información de clientes mediante su tipo y número de documento.

## Características

- Búsqueda de clientes por tipo de documento (Cédula/Pasaporte) y número
- Validación de campos en tiempo real
- Visualización detallada de la información del cliente
- Diseño responsive con Bootstrap
- Manejo de estados de carga y errores
- Integración con API REST

## Tecnologías Utilizadas

- Angular 17.3.0
- TypeScript 5.4.2
- Bootstrap 5.3.3
- RxJS 7.8.0
- Nx 20.1.3

## Requisitos Previos

- Node.js (versión 18.x o 20.x)
  - Versión recomendada: 20.16.0
  - Versión mínima: 18.0.0
- npm (incluido con Node.js)
- Angular CLI (@angular/cli@17.3.0 o superior)

## Verificación del Entorno

Puedes verificar tu entorno con los siguientes comandos:

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run start
```

La aplicación estará disponible en `http://localhost:4200/`.

## Scripts Disponibles

- `npm run start`: Inicia el servidor de desarrollo con Nx (abre automáticamente el navegador)
  ```bash
  nx serve prueba-t-f --open --watch --poll=500
  ```

- `npm run build`: Construye la aplicación usando Nx
  ```bash
  nx build
  ```

- `npm run watch`: Construye la aplicación en modo desarrollo con watch
  ```bash
  nx build --watch --configuration development
  ```

- `npm run test`: Ejecuta las pruebas unitarias
  ```bash
  nx test
  ```

- `npm run serve:ssr:prueba-t-f`: Inicia el servidor SSR
  ```bash
  node dist/prueba-t-f/server/server.mjs
  ```

## Dependencias Principales

```json
{
  "@angular/*": "^17.3.0",
  "rxjs": "~7.8.0",
  "express": "^4.18.2",
  "zone.js": "~0.14.3"
}
```
