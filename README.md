# Kyrios BackApp

## Descripción

Kyrios BackApp es una aplicación backend construida con Node.js, Express y MongoDB. Proporciona una API para gestionar usuarios, autenticación y pruebas ISO.

## Requisitos Previos

- Node.js (versión 14 o superior)
- MongoDB (puede ser una instancia local o en la nube)
- npm (gestor de paquetes de Node.js)

## Instalación

1. **Clona el repositorio:**
   - Abre tu terminal.
   - Copia el proyecto con:
     ```sh
     git clone git@github.com:yeyodev1/kyrios-backapp.git
     ```

2. **Abre el proyecto en tu editor de código:**
   - Dirígete al directorio donde clonaste el proyecto.
   - Abre el proyecto en tu editor de código preferido.

3. **Crea un archivo `.env`:**
   - Establece las siguientes variables en el archivo `.env`:
     ```env
     PORT=
     NODE_ENV=
     MONGODB_URIretryWrites=
     JWT_SECRET=
     ```

4. **Instala las dependencias:**
   - En la consola, ejecuta el siguiente comando:
     ```sh
     npm install
     ```

5. **Compila y corre el proyecto:**
   - Primero, compila el proyecto:
     ```sh
     npm run compile
     ```
   - Luego, ejecuta el proyecto en modo desarrollo:
     ```sh
     npm run dev
     ```

   - Ya tendrás acceso al proyecto corriendo.
