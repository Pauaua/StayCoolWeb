# StayCool

Landing page de StayCool — agenda de bienestar, imagen, higiene,
actividades sociales y gastos para jóvenes.

## Stack

- [Next.js](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/) como ORM
- [PostgreSQL](https://www.postgresql.org/) alojado en [Supabase](https://supabase.com/)
- Desplegado en [Vercel](https://vercel.com/)

## Variables de entorno

Copia `.env.example` a `.env` y completa los valores:

```
DATABASE_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true"
```

**Importante:** usa el connection string del **Transaction pooler** de
Supabase (puerto `6543`, con `?pgbouncer=true`), no el de conexión directa
(puerto `5432`). Vercel ejecuta las funciones serverless con muchas
conexiones concurrentes de corta duración, y la conexión directa a Postgres
se queda sin slots disponibles muy rápido. El pooler está pensado justamente
para ese patrón de uso.

Puedes encontrar este connection string en tu proyecto de Supabase, en
**Project Settings → Database → Connection string → Transaction pooler**.

## Desarrollo local

```bash
npm install
npx prisma migrate dev
npm run dev
```

Esto levanta el servidor en `http://localhost:3000`.

## Prisma / migraciones contra Supabase

El modelo de datos vive en `prisma/schema.prisma`. Actualmente incluye
`ContactMessage`, usado por el formulario de contacto (`/contacto`).

Para aplicar el esquema a la base de datos de Supabase:

```bash
npx prisma migrate dev --name init
```

Esto crea la migración en `prisma/migrations/` y la aplica a la base de
datos indicada por `DATABASE_URL`. En producción (o CI), usa en su lugar:

```bash
npx prisma migrate deploy
```

Para inspeccionar los datos:

```bash
npx prisma studio
```

> Nota: `prisma migrate dev` necesita poder ejecutar comandos DDL directos;
> si tu `DATABASE_URL` apunta al pooler en modo *transaction* y tienes
> problemas al migrar, Supabase también expone un connection string de
> conexión directa (puerto `5432`) que puedes usar **solo para migraciones**
> ejecutándolas desde tu máquina local, dejando el pooler como `DATABASE_URL`
> en Vercel para runtime.

## Despliegue en Vercel

1. Importa el repositorio en Vercel.
2. Agrega la variable de entorno `DATABASE_URL` (el connection string del
   Transaction pooler de Supabase) en **Project Settings → Environment
   Variables**.
3. El script `build` ya está configurado para correr `prisma generate`
   antes de `next build` (ver `package.json`), y `postinstall` también
   corre `prisma generate` para asegurar que el cliente de Prisma quede
   generado en cada instalación. No se requiere configuración adicional en
   Vercel.
4. Antes del primer deploy (o después de cambiar el esquema), aplica las
   migraciones a la base de Supabase desde tu máquina local con
   `npx prisma migrate deploy`.

## Estructura

- `app/page.tsx` — página principal (Navbar, Hero, sección "Qué es la app").
- `app/contacto/page.tsx` — página de contacto con formulario.
- `app/privacidad/page.tsx` — política de privacidad (plantilla).
- `app/api/contact/route.ts` — Route Handler que guarda los mensajes del
  formulario de contacto en la base de datos vía Prisma.
- `components/` — componentes de UI compartidos.
- `prisma/schema.prisma` — modelo de datos.
- `lib/prisma.ts` — cliente de Prisma singleton.

## Pendientes / a reemplazar

- Reemplazar el placeholder de teléfono, correo y WhatsApp en
  `app/contacto/page.tsx`.
- Reemplazar el código QR (placeholder) en `components/QueEsLaApp.tsx` por
  el QR real apuntando a la ficha de Google Play.
- Revisar y ajustar el texto de `app/privacidad/page.tsx` con el equipo
  legal antes de publicar la URL en las tiendas.
