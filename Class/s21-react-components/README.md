# S21 - React Components

SustainHub muestra proyectos de clima y permite votar y guardar favoritos.

## Iniciar

```bash
npm install
npm run dev
```

Abre la dirección local que muestra Next.js.

## Archivos principales

- `data/initiatives.tsx`: proyectos de ejemplo.
- `components/InitiativeCard.tsx`: tarjeta reutilizable.
- `components/InitiativesContext.tsx`: votos y favoritos compartidos entre páginas.
- `app/page.tsx`: lista de proyectos.
- `app/initiative/[id]/page.tsx`: detalle de un proyecto; por ejemplo, `/initiative/101`.

Next.js usa `Link` para cambiar de página sin recargar el sitio.
