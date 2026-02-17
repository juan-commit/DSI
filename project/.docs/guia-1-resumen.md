# Resumen Guía 1 - Explorando Ecosistema y Configuración Inicial

## Objetivo
Configurar el entorno de desarrollo con Node.js y NestJS, crear el proyecto inicial e implementar la entidad `Tenant` con datos semilla.

## Actividades Realizadas

### 1. Verificación y Setup del Entorno
- Verificación de versiones de Node.js (`node --version`) y NPM.
- Instalación de NestJS CLI (`npm i -g @nestjs/cli`).
- Creación del proyecto NestJS: `nest new my_first_proyect_CACL`.

### 2. Base de Datos y Prisma
- Configuración inicial de Prisma con SQLite (por defecto en el esqueleto).
- Creación de la entidad `Tenant` en `prisma/schema.prisma`:
  ```prisma
  model Tenant {
    id          Int      @id @default(autoincrement())
    name        String
    description String?
    createdAt   DateTime @default(now())
    updatedAt   DateTime @updatedAt
  }
  ```

### 3. Seeding (Datos Semilla)
- Creación del script `prisma/seed.ts` para insertar un tenant por defecto.
- Configuración en `package.json` para ejecutar el seed:
  ```json
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  }
  ```

### 4. Migración
- Ejecución de la migración para crear la tabla en la base de datos:
  ```bash
  npx prisma migrate dev --name add_tenant
  ```
- Ejecución del seed para poblar la base de datos:
  ```bash
  npx prisma db seed
  ```

## Resultado
El proyecto base está creado, conectado a una base de datos SQLite local, y cuenta con la tabla `Tenant` poblada con un registro inicial.
