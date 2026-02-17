# Proyecto DSI - NestJS API

Este repositorio contiene el desarrollo del proyecto backend basado en NestJS, siguiendo las Guías Didácticas de la asignatura.

## Descripción General
El proyecto es una API RESTful construida con **NestJS** y **Prisma ORM** (SQLite), que incluye autenticación segura mediante **JWT** y documentación automática con **Swagger**.

## Progreso del Proyecto

El desarrollo se ha dividido en las siguientes fases (Guías):

### 📘 Guía 1: Configuración Inicial y Ecosistema
- **Configuración del Entorno**: Setup de Node.js, NestJS CLI y creación del proyecto.
- **Base de Datos**: Inicialización de Prisma con SQLite.
- **Modelado de Datos**: Creación de la entidad `Tenant`.
- **Seeding**: Script para poblar la base de datos con datos iniciales (`prisma/seed.ts`).

### 📘 Guía 2: Arquitectura y Documentación
- **Patrón Singleton**: Refactorización de `PrismaService` y creación de `PrismaModule` global para una gestión eficiente de conexiones.
- **Documentación API**: Integración de **Swagger** (`/api`) para documentar y probar endpoints.
- **CRUD de Usuarios**: Generación del recurso `User` (Módulo, Controlador, Servicio, DTOs y Entidad).

### 📘 Guía 3: Autenticación y Seguridad
- **Módulo de Autenticación**: Implementación de `AuthModule` con `Passport` y `JwtModule`.
- **Estrategia JWT**: Configuración de `JwtStrategy` para proteger rutas mediante tokens Bearer.
- **Login**: Endpoint `/auth/login` que valida credenciales y emite tokens.
- **Protección de Rutas**: Implementación de `JwtAuthGuard` global o por controlador.

---

## 🛠️ Instalación y Configuración

### 1. Prerrequisitos
- Node.js (v18+ recomendado)
- npm

### 2. Instalación de Dependencias
```bash
npm install
```

### 3. Configuración de Entorno
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
# Conexión a Base de Datos (SQLite)
DATABASE_URL="file:./dev.db"

# Configuración JWT
JWT_SECRET="mi_llave_secreta_pro"
JWT_EXPIRATION="24h"
```

### 4. Configuración de Base de Datos
Este proyecto utiliza **Prisma 5.21.0** por estabilidad con SQLite.
```bash
# Generar el cliente de Prisma
npx prisma generate

# Ejecutar migraciones
npx prisma migrate dev --name init

# Poblar la base de datos (Seed)
npx prisma db seed
```

> **Nota Importante sobre Prisma:**
> Si encuentras errores de inicialización (`PrismaClientInitializationError`), asegúrate de estar usando la versión 5.21.0 de `@prisma/client` y `prisma`. La versión 7.x presentó incompatibilidades con la configuración actual de SQLite.

### 5. Ejecutar la Aplicación
```bash
# Modo desarrollo
npm run start:dev
```
La aplicación estará disponible en `http://localhost:3000`.
La documentación Swagger estará en `http://localhost:3000/api`.

---

## 📂 Estructura de Documentación
Para detalles específicos de cada fase, consulta los resúmenes en la carpeta `.docs`:
- [Guía 1 - Resumen](.docs/guia-1-resumen.md)
- [Guía 2 - Resumen](.docs/guia-2-resumen.md)
- [Guía 3 - Resumen](.docs/guia-3-resumen.md)
