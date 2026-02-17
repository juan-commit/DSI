# Detalle Guía 2 - CRUD, Arquitectura Prisma y Swagger

## Objetivo
Mejorar la arquitectura del proyecto implementando el patrón Singleton para `PrismaClient`, documentar la API con Swagger y generar un recurso CRUD completo para `User`.

## Actividades Realizadas

### 1. Refactorización de Prisma Service (Buenas Prácticas)
#### Generación de Módulo y Servicio
Se utilizaron los generadores de NestJS para crear una estructura modular para Prisma:
- `nest g module prisma`
- `nest g service prisma`

#### Implementación del Servicio (`PrismaService`)
- El servicio extiende `PrismaClient` para heredar sus métodos.
- Implementa `OnModuleInit` para conectar a la base de datos al iniciar el módulo.
```typescript
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
```

#### Implementación del Módulo (`PrismaModule`)
- Se configuró como un módulo **Global** (`@Global()`) para que el servicio `PrismaService` esté disponible en toda la aplicación sin necesidad de importarlo en cada módulo.
- Exporta `PrismaService` para que otros módulos puedan inyectarlo.

### 2. Documentación con Swagger
#### Instalación
Se instalaron las dependencias necesarias:
```bash
npm install --save @nestjs/swagger swagger-ui-express
```

#### Configuración
En el archivo `main.ts`, se configuró el `DocumentBuilder` y `SwaggerModule` antes de que la aplicación escuche peticiones:
```typescript
const config = new DocumentBuilder()
  .setTitle('Median')
  .setDescription('The Median API description')
  .setVersion('0.1')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
```
Esto habilita la documentación interactiva en: http://localhost:3000/api

### 3. Generación de Recurso User (CRUD)
Se generó el recurso completo para usuarios utilizando el CLI de NestJS:
```bash
nest g resource user
```
- Se seleccionó el transporte **REST API**.
- Se aceptó la generación de puntos de entrada **CRUD**.

Esto creó automáticamente:
- `UserModule`: Módulo de usuarios.
- `UserController`: Controlador con rutas definidas (`GET`, `POST`, `PATCH`, `DELETE`).
- `UserService`: Servicio con la lógica de negocio (esqueleto).
- `Dto`: Objetos de transferencia de datos (`CreateUserDto`, `UpdateUserDto`).
- `Entities`: Entidad de dominio `User`.

## Resultado Final
La aplicación ahora cuenta con una arquitectura más robusta para el acceso a datos, documentación automática de la API, y un recurso `User` listo para ser implementado con la lógica específica de negocio.
