# Resumen de Finalización - Guía Didáctica N° 3

Este documento resume la implementación del sistema de autenticación basado en JWT (JSON Web Tokens) para el proyecto, cumpliendo con los objetivos de la Guía Didáctica N° 3.

## Implementación Técnica

### 1. Módulo de Autenticación (`AuthModule`)
Se centralizó la lógica de seguridad integrando `Passport` y `JwtModule`.
- **Archivo**: `src/auth/auth.module.ts`
- **Dependencias**: `@nestjs/passport`, `@nestjs/jwt`, `passport-jwt`.

### 2. Estrategia JWT y Validación
Se implementó `JwtStrategy` para extraer y validar el token de los encabezados de las peticiones (`Bearer Token`).
- **Archivo**: `src/auth/strategies/jwt.strategy.ts`
- **Validación**: Verifica que el usuario exista en la base de datos y que el token sea válido.

### 3. Guardia de Seguridad (`JwtAuthGuard`)
Se creó un guardia para proteger las rutas, permitiendo el acceso solo a usuarios autenticados.
- **Archivo**: `src/auth/guards/jwt-auth.guard.ts`

### 4. Servicio de Autenticación
El servicio valida las credenciales del usuario contra la base de datos y genera el token firmado.
- **Archivo**: `src/auth/auth.service.ts`

### 5. Integración con Swagger
Se habilitó la autenticación en la documentación de la API.
- **Configuración**: `.addBearerAuth()` en `src/main.ts`.

## Configuración del Entorno
Se añadieron las siguientes variables al archivo `.env`:
```env
JWT_SECRET="mi_llave_secreta_pro"
JWT_EXPIRATION="24h"
```

## Solución de Problemas (Prisma)
Durante la implementación, se encontraron problemas de compatibilidad con la versión 7.4.0 de Prisma en el entorno local.
**Solución**: Se realizó un downgrade a la versión **5.21.0** y se ajustó el esquema (`schema.prisma`) para ser compatible con SQLite (eliminando `enums` nativos).

---
*Este módulo completa la tríada de guías iniciales, dotando al sistema de una capa de seguridad profesional y escalable.*
