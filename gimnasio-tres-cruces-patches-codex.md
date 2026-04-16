# Plan de patches y prompts para Codex — Demo comercial Gimnasio Tres Cruces

## Objetivo del plan
Construir una demo comercial simple, rápida y visualmente fuerte en pequeños patches, manteniendo foco en conversión y evitando sobreingeniería.

## Reglas para todos los patches
- Stack: Next.js + TypeScript + Tailwind + App Router
- No agregar backend, auth, base de datos, panel admin ni integraciones externas
- Priorizar mobile first
- Mantener el contenido en `src/data/gym.ts`
- No crear abstracciones innecesarias
- Cada patch debe dejar el proyecto funcional
- El resultado debe parecer una demo premium, no un ejercicio técnico

---

## Comando base de creación del entorno
```bash
npx create-next-app@latest gimnasio-tres-cruces-demo --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### Siguiente paso recomendado
```bash
cd gimnasio-tres-cruces-demo
npm install lucide-react
npm run dev
```

> `lucide-react` entra porque da mucho valor visual con costo técnico mínimo para badges, beneficios y contacto.

---

# Patch 0 — Bootstrap comercial del proyecto
## Objetivo
Dejar el proyecto limpio, con una base lista para construir una landing comercial reusable.

## Resultado esperado
- estructura mínima ordenada
- estilos globales base
- carpeta `components/site`
- carpeta `data`
- primera versión de `src/data/gym.ts`
- home temporal simple conectada al data file

## Criterios de aceptación
- el proyecto corre sin errores
- existe una base clara para seguir iterando
- el contenido principal está desacoplado del layout

## Prompt para Codex
```text
Quiero que prepares la base del proyecto para una demo comercial de gimnasio usando Next.js App Router, TypeScript y Tailwind.

Objetivo:
crear una estructura mínima, limpia y reusable para una landing de alta conversión, sin backend ni sobreingeniería.

Tareas:
1. Crear carpeta `src/components/site/`.
2. Crear carpeta `src/data/`.
3. Crear `src/data/gym.ts` con contenido inicial tipado, incluyendo:
   - name
   - headline
   - subheadline
   - primaryCtaLabel
   - primaryCtaHref
   - secondaryCtaLabel
   - benefits
   - activities
   - testimonials
   - address
   - hours
   - instagramUrl
   - whatsappUrl
   - trustBadges
4. Limpiar `src/app/page.tsx` y dejar una home temporal simple conectada a `gym.ts`.
5. Ajustar `globals.css` para una base visual oscura, moderna y premium.
6. No agregar librerías extra salvo las ya instaladas.
7. Mantener el código simple, legible y listo para futuros patches.

Restricciones:
- No crear backend
- No usar fetch
- No usar datos remotos
- No crear componentes genéricos innecesarios

Entregame el resultado listo para continuar con el siguiente patch.
```

---

# Patch 1 — Hero de conversión
## Objetivo
Construir el bloque más importante de la demo: un hero potente que comunique valor y CTA en segundos.

## Resultado esperado
- header mínimo con CTA
- hero con headline, subheadline y dos botones
- visual principal fuerte
- badges o micropruebas de confianza

## Criterios de aceptación
- arriba del fold se entiende qué ofrece el negocio
- el CTA principal es muy visible
- el hero se ve fuerte tanto en desktop como en mobile

## Prompt para Codex
```text
Implementá el hero principal de la demo comercial del gimnasio.

Quiero:
1. Un `Header` simple con:
   - nombre/logo de texto
   - navegación corta: Actividades, Horarios, Ubicación
   - CTA visible: “Agendá tu clase de prueba”
2. Un componente `Hero` con:
   - headline fuerte
   - subheadline breve
   - CTA principal a WhatsApp
   - CTA secundario a la sección de actividades
   - 3 trust badges cortos
   - una imagen principal con overlay oscuro
3. Integrar `Header` y `Hero` en `src/app/page.tsx`.
4. Mantener estética dark premium, atlética y moderna.
5. Evitar cualquier copy institucional genérico.

Importante:
- Mobile first
- Mucha jerarquía tipográfica
- Espaciado prolijo
- Nada de sliders ni animaciones complejas

Quiero el hero como la parte más fuerte visualmente de toda la demo.
```

---

# Patch 2 — Beneficios que convierten
## Objetivo
Traducir reputación en razones concretas para elegir el gimnasio.

## Resultado esperado
- sección con 3 o 4 beneficios
- cards limpias con iconos
- copy corto y comercial

## Criterios de aceptación
- la sección responde “por qué elegirlos” sin relleno
- visualmente acompaña al hero sin competirle

## Prompt para Codex
```text
Implementá la sección de beneficios comerciales del gimnasio.

Necesito un componente `Benefits` que muestre 3 o 4 cards con:
- icono
- título
- texto corto

Objetivo comercial:
explicar por qué este gimnasio inspira confianza y merece consulta.

Requisitos:
- usar los datos de `src/data/gym.ts`
- cards limpias, modernas y consistentes con la estética dark premium
- copy breve, orientado a decisión
- diseño responsive

No quiero frases vacías tipo “tu mejor versión”.
Quiero beneficios concretos y creíbles.
```

---

# Patch 3 — Oferta visible / actividades
## Objetivo
Hacer tangible lo que el gimnasio ofrece sin saturar al usuario.

## Resultado esperado
- sección visual de actividades/modalidades
- 4 a 6 items máximo
- un pequeño texto que explique que hay opciones para distintos objetivos

## Criterios de aceptación
- la oferta se entiende de un vistazo
- no parece una tabla aburrida ni un listado infinito

## Prompt para Codex
```text
Implementá la sección `Activities` para mostrar la oferta del gimnasio.

Quiero:
- una grilla o layout visual simple con 4 a 6 actividades
- título de sección
- subtítulo breve explicando que hay opciones para distintos objetivos y niveles
- cada actividad en una card o bloque visual claro

Requisitos:
- obtener el contenido desde `src/data/gym.ts`
- priorizar claridad sobre cantidad
- estética consistente con el resto de la landing
- nada de tablas pesadas ni acordeones

Objetivo comercial:
que la persona se identifique rápido con una modalidad y sienta que puede empezar.
```

---

# Patch 4 — Prueba social
## Objetivo
Reducir riesgo percibido y convertir reputación en confianza explícita.

## Resultado esperado
- sección de testimonios
- indicador visual de validación
- diseño sobrio y premium

## Criterios de aceptación
- la prueba social se ve realista
- suma confianza sin ensuciar el diseño

## Prompt para Codex
```text
Implementá la sección `SocialProof`.

Quiero una sección con:
- título de confianza
- 3 testimonios cortos
- un pequeño indicador visual arriba (por ejemplo comunidad, reseñas o trayectoria, sin inventar claims imposibles)

Requisitos:
- usar datos de `src/data/gym.ts`
- diseño limpio, premium y ordenado
- sin carruseles
- sin exceso de texto

Objetivo comercial:
bajar fricción y hacer sentir que el gimnasio ya está validado por otras personas.
```

---

# Patch 5 — Cómo empezar + cierre comercial
## Objetivo
Eliminar fricción y cerrar la decisión de contacto.

## Resultado esperado
- bloque “Cómo empezar” en 3 pasos
- sección final con ubicación, horarios y CTA
- contacto visible y entendible

## Criterios de aceptación
- queda clarísimo qué tiene que hacer una persona interesada
- el cierre impulsa a escribir

## Prompt para Codex
```text
Implementá dos secciones nuevas:
1. `HowItWorks`
2. `ContactSection`

`HowItWorks` debe mostrar en 3 pasos:
- Escribinos
- Te orientamos
- Empezá esta semana

`ContactSection` debe incluir:
- dirección
- horarios
- Instagram
- CTA principal a WhatsApp
- cierre visual potente y limpio

Requisitos:
- mobile first
- datos tomados desde `src/data/gym.ts`
- CTA final muy visible
- diseño consistente con el hero

Objetivo comercial:
que al final de la página la decisión de contacto sea obvia y fácil.
```

---

# Patch 6 — Sticky CTA móvil y pulido de conversión
## Objetivo
Mejorar capacidad de contacto en mobile con muy bajo costo técnico.

## Resultado esperado
- botón sticky mobile
- refinamiento de espaciado, jerarquía y consistencia visual
- anchors funcionando bien

## Criterios de aceptación
- el sitio se siente más comercial en mobile
- el CTA acompaña la navegación sin molestar demasiado

## Prompt para Codex
```text
Implementá un componente `StickyCta` optimizado para mobile.

Quiero:
- botón fijo inferior en mobile
- texto claro tipo “Agendá tu clase de prueba” o “Escribinos por WhatsApp”
- link al CTA principal del data file
- buen contraste
- que no tape contenido importante

Además:
- revisá espaciados verticales
- mejorá consistencia entre secciones
- asegurate de que los anchors del header funcionen bien
- pulí detalles de responsive

Objetivo comercial:
mejorar conversión en el contexto principal en el que esta demo será compartida: WhatsApp/mobile.
```

---

# Patch 7 — Reemplazo de placeholders y acabado para envío
## Objetivo
Dejar la demo lista para enseñarla al lead como pieza comercial real.

## Resultado esperado
- copy final más preciso
- placeholders reemplazados por contenido real o mockeado con criterio
- detalles visuales pulidos

## Criterios de aceptación
- la demo ya se puede enviar
- no hay texto lorem ipsum
- no hay elementos dudosos o inconsistentes

## Prompt para Codex
```text
Quiero un patch final de pulido para dejar la demo lista para enviarse al lead.

Tareas:
- revisar todo el copy y hacerlo más comercial y natural
- eliminar cualquier placeholder obvio
- mejorar pequeños detalles de UI: contrastes, tamaños, espaciados, radios, consistencia de botones
- asegurar que el hero, beneficios y cierre sean las partes más fuertes visualmente
- validar que la landing se vea bien en mobile y desktop

Restricciones:
- no agregar nuevas secciones
- no agregar funcionalidades complejas
- no meter animaciones que ralenticen ni distraigan

Objetivo:
que la demo se vea profesional, clara y lista para abrir conversación comercial con el dueño.
```

---

# Patch 8 — Reutilización para otros gimnasios
## Objetivo
Dejar la base lista para reuso sin rehacer el proyecto.

## Resultado esperado
- contenido bien centralizado
- componentes desacoplados del nombre específico
- estructura fácilmente clonable

## Criterios de aceptación
- cambiar negocio = reemplazar data e imágenes, no reescribir componentes

## Prompt para Codex
```text
Hacé una revisión de mantenibilidad ligera orientada a reutilización.

Quiero que verifiques que:
- todo el contenido editable esté centralizado en `src/data/gym.ts`
- los componentes no tengan strings hardcodeados innecesarios
- la estructura sea fácil de clonar para otros gimnasios o servicios locales
- no existan dependencias técnicas innecesarias

No quiero refactor abstracto.
Quiero una mejora pragmática para que esta demo sirva como base comercial reusable.
```

---

# Orden recomendado de ejecución
1. Patch 0 — Bootstrap comercial del proyecto
2. Patch 1 — Hero de conversión
3. Patch 2 — Beneficios que convierten
4. Patch 3 — Oferta visible / actividades
5. Patch 4 — Prueba social
6. Patch 5 — Cómo empezar + cierre comercial
7. Patch 6 — Sticky CTA móvil y pulido de conversión
8. Patch 7 — Reemplazo de placeholders y acabado para envío
9. Patch 8 — Reutilización para otros gimnasios

---

# Qué patch vende más
Si solo pudieras mostrar una versión temprana al lead, la combinación más valiosa sería:
- Patch 1
- Patch 2
- Patch 5

Porque con eso ya tenés:
- primera impresión fuerte
- razones para elegir el negocio
- cierre comercial claro

---

# Nota táctica final
Esta demo no debe intentar impresionar por complejidad.
Debe impresionar por:
- criterio
- claridad
- presentación
- facilidad para convertir

Ese es el ángulo correcto para un lead real.
