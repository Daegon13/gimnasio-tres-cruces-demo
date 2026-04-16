# Arquitectura y alcance — Demo comercial para Gimnasio Tres Cruces

## 1. Objetivo del producto
Construir una **landing demo comercial** para un lead real del rubro gimnasio en Montevideo.

La demo no busca resolver operaciones internas ni membresías. Su objetivo es **mejorar percepción comercial y claridad de conversión** para que el dueño vea una mejora evidente en cómo el negocio capta consultas e inscripciones.

La pieza debe poder mostrarse por WhatsApp sin explicación técnica larga.

## 2. Objetivo comercial principal
La demo debe comunicar en segundos:
- qué ofrece el gimnasio
- por qué inspira confianza
- cómo empezar
- por qué escribir ahora

La métrica implícita de éxito no es “tiempo en el sitio”, sino:
- más intención de contacto
- menor fricción de consulta
- mejor percepción profesional
- mejor capacidad de abrir conversación comercial con el lead

## 3. Tipo de producto
**Landing de primera inscripción**

No es:
- web institucional larga
- app
- sistema de reservas
- SaaS
- portal de socios
- panel administrativo

## 4. Restricciones técnicas
### No entra en esta demo
- auth
- backend
- panel admin
- reservas reales
- pagos
- scraping
- automatizaciones
- integraciones externas
- CMS
- formularios complejos

### Stack objetivo
- Next.js
- TypeScript
- Tailwind CSS
- App Router

## 5. Principio rector
**Máximo impacto comercial con mínima complejidad técnica.**

Toda decisión debe pasar este filtro:
> “¿Esto aumenta la capacidad de captar interés o solo agrega trabajo?”

Si solo agrega trabajo, queda afuera.

## 6. Estrategia de comunicación
La demo debe posicionar al gimnasio como:
- profesional
- moderno
- confiable
- accesible para empezar
- claro en su propuesta

No debe parecer:
- plantillero
- corporativo frío
- agresivo
- recargado
- improvisado

## 7. Estructura funcional del sitio
## 7.1 Header mínimo
**Rol:** orientar y exponer el CTA principal.

Contenido:
- nombre/logo
- navegación corta: Actividades, Horarios, Ubicación
- CTA principal visible: `Agendá tu clase de prueba`

## 7.2 Hero de conversión
**Rol:** vender la propuesta en 5 segundos.

Contenido:
- headline claro
- subheadline corto
- CTA principal a WhatsApp
- CTA secundario a actividades
- microbadges de confianza
- visual principal fuerte

## 7.3 Beneficios comerciales
**Rol:** traducir reputación en motivos de elección.

Contenido:
- 3 o 4 beneficios concretos
- copy orientado a claridad y decisión

## 7.4 Oferta/actividades
**Rol:** hacer tangible lo que el usuario puede hacer ahí.

Contenido:
- lista visual de actividades/modalidades
- una frase de encaje para distintos perfiles

## 7.5 Prueba social
**Rol:** reducir riesgo percibido.

Contenido:
- testimonios breves
- indicador de validación visible

## 7.6 Cómo empezar
**Rol:** bajar fricción.

Contenido:
- paso 1: escribinos
- paso 2: te orientamos
- paso 3: empezá esta semana

## 7.7 Cierre comercial
**Rol:** cerrar contacto.

Contenido:
- ubicación
- horarios
- WhatsApp
- Instagram
- CTA final

## 7.8 Sticky CTA móvil
**Rol:** capturar intención en mobile sin obligar a scrollear hasta el final.

## 8. Decisiones de UX
### Qué priorizamos
- lectura instantánea
- jerarquía visual fuerte
- CTA visibles
- scroll corto
- comprensión en mobile

### Qué evitamos
- exceso de menú
- sliders
- texto genérico largo
- galería interminable
- tablas confusas
- secciones “Nosotros” sin impacto comercial

## 9. Sistema visual recomendado
### Estética
- fondo oscuro / grafito
- contraste alto
- acento de color energético
- tipografía bold en titulares
- tarjetas limpias con buen espaciado

### Sensación deseada
- energía
- premium
- claridad
- decisión
- profesionalismo local

### Recursos visuales baratos pero efectivos
- overlay oscuro sobre hero
- badges de confianza
- iconos simples
- 1 foto principal muy buena
- 2 o 3 fotos secundarias bien recortadas
- buena separación vertical entre secciones

## 10. Arquitectura de componentes sugerida
Esta separación es pragmática y suficiente para una demo reusable.

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    site/
      Header.tsx
      Hero.tsx
      Benefits.tsx
      Activities.tsx
      SocialProof.tsx
      HowItWorks.tsx
      ContactSection.tsx
      StickyCta.tsx
      SectionShell.tsx
  data/
    gym.ts
  lib/
    cn.ts (opcional si usan utilidades)
  public/
    images/
      hero.jpg
      gym-1.jpg
      gym-2.jpg
      gym-3.jpg
```

## 11. Modelo de datos local
No usar fetch ni CMS. Mantener contenido local en un solo archivo.

### `src/data/gym.ts`
Debe contener:
- `name`
- `headline`
- `subheadline`
- `primaryCtaLabel`
- `primaryCtaHref`
- `secondaryCtaLabel`
- `benefits[]`
- `activities[]`
- `testimonials[]`
- `address`
- `hours`
- `instagramUrl`
- `whatsappUrl`
- `trustBadges[]`

Ventaja:
- reemplazo rápido por otro gimnasio
- reuso para otros rubros
- cero dependencia externa

## 12. Reglas de copy
### Debe ser
- concreto
- corto
- comercial
- local
- entendible en segundos

### No debe ser
- motivacional vacío
- institucional genérico
- técnico
- exagerado
- saturado de claims imposibles de sostener

## 13. Reglas de contenido
### Sí conviene incluir
- beneficios
- actividades
- reseñas/testimonios
- ubicación
- horarios
- CTA a WhatsApp

### No conviene incluir en v1
- planes inventados
- precios no confirmados
- FAQ larga
- bio extensa de profesores
- blog
- métricas dudosas
- promesas tipo “resultados garantizados”

## 14. Orden de implementación recomendado
1. base visual + layout
2. hero
3. beneficios
4. actividades
5. prueba social
6. cierre comercial
7. sticky CTA móvil
8. reemplazo de placeholders y pulido final

## 15. Riesgos a controlar
### Riesgo 1 — caer en una web institucional
Mitigación: cada sección debe tener una función directa de conversión.

### Riesgo 2 — saturar con contenido
Mitigación: máximo 6–7 bloques y copy corto.

### Riesgo 3 — prometer features no implementadas
Mitigación: no mostrar reservas, pagos ni dashboards.

### Riesgo 4 — hero lindo pero vacío
Mitigación: headline específico + CTA + badges + visual real.

### Riesgo 5 — depender de assets perfectos
Mitigación: trabajar con placeholders de calidad y estructura sólida desde el inicio.

## 16. Criterios de aceptación de la demo
La demo está lista cuando:
- se entiende el negocio en menos de 5 segundos
- hay CTA visible arriba del fold
- se puede recorrer completa en 1 minuto
- se ve bien en mobile
- se siente premium sin funcionalidades complejas
- está lista para enviarse por WhatsApp como pieza comercial

## 17. Reutilización futura
Esta arquitectura debe permitir:
- reemplazar nombre, imágenes y copy sin tocar la estructura
- clonar rápido para otros gimnasios
- adaptar a otros servicios locales con poca fricción

El valor estratégico no es solo esta demo, sino la **plantilla comercial reusable**.
