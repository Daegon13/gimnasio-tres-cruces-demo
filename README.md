# Gimnasio Tres Cruces Demo

Landing page desarrollada con Next.js 16 (App Router).

## Requisitos

- Node.js `20.9` o superior.
- npm `10` o superior.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Deploy en Vercel

La app ya está preparada para desplegarse en Vercel sin configuración extra.

1. Subí este repositorio a GitHub/GitLab/Bitbucket.
2. En Vercel, elegí **Add New > Project**.
3. Importá el repositorio y mantené los valores detectados por defecto:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next` (automático)
4. Deploy.

### Variables de entorno

Actualmente no son obligatorias para que la app funcione. Si agregás alguna en el futuro, replicala en:

- `.env.local` para desarrollo.
- **Project Settings > Environment Variables** en Vercel.
