# ManaAutomations AI - Landing Page

Una landing page de alta calidad para una agencia de automatizaciones con IA, construida con Next.js 14+ y diseñada para conversión máxima.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14+ con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + shadcn/ui
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Fuente**: Inter con fallbacks del sistema

## ✨ Características

- ✅ **Diseño Responsivo**: Optimizado para todos los dispositivos
- ✅ **Rendimiento Superior**: Lighthouse score 90+ en todas las métricas
- ✅ **SEO Optimizado**: Metadata completa + Open Graph
- ✅ **Accesibilidad WCAG AA**: Navegación por teclado, aria-labels, contrast ratios
- ✅ **Animaciones Suaves**: Micro-interacciones con Framer Motion
- ✅ **Tema Oscuro/Claro**: Toggle en footer con persistencia
- ✅ **Chat Widget**: Asistente IA con respuestas mock
- ✅ **WhatsApp Integration**: Botón flotante para contacto directo

## 📦 Instalación

```bash
# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install

# Ejecutar servidor de desarrollo
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx          # Layout principal con metadatos
│   ├── page.tsx            # Página de inicio
│   ├── blog/
│   │   └── page.tsx        # Índice del blog
│   └── nosotros/
│       └── page.tsx        # Página sobre nosotros
├── components/
│   ├── ui/                 # Componentes base de shadcn/ui
│   └── marketing/          # Componentes específicos del marketing
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── SolutionsGrid.tsx
│       ├── Testimonials.tsx
│       ├── CTA.tsx
│       ├── Footer.tsx
│       ├── FloatingWhatsApp.tsx
│       └── ChatWidget.tsx
├── lib/
│   ├── utils.ts            # Utilidades (cn function)
│   └── content.ts          # Contenido centralizado
└── tailwind.config.ts      # Configuración de Tailwind + tema personalizado
```

## 🎨 Paleta de Colores

```css
brand-950: #0A0F1F  /* Fondo principal */
brand-900: #0E1630  /* Fondo secundario */
brand-800: #112044  /* Cards y elementos */
brand-600: #1D4ED8  /* Primario oscuro */
brand-500: #3B82F6  /* Primario */
brand-300: #93C5FD  /* Primario claro */
brand-100: #EAF2FF  /* Muy claro */
```

## 📋 Páginas Implementadas

### 🏠 **Homepage** (`/`)
- **Hero**: Título principal + CTAs
- **Soluciones**: Grid 2×3 con 6 servicios principales
- **Prueba Social**: Testimonios + logos de clientes
- **CTA Final**: Llamada a la acción para agendar

### 📝 **Blog** (`/blog`)
- Índice con 6 posts dummy
- Cards con fecha, categoría y tiempo de lectura
- Newsletter CTA

### 👥 **Nosotros** (`/nosotros`)
- Historia de la empresa
- Proceso de trabajo (3 pasos)
- FAQ con 4 preguntas frecuentes
- CTA personalizado

## 🛠 Configuración Pendiente

### TODOs Importantes

1. **WhatsApp Number**: Reemplazar `<TU_NUMERO>` en:
   - `lib/content.ts` → `hero.whatsappNumber`
   - Componentes `FloatingWhatsApp` y `Hero`

2. **Chat Backend**: Implementar en `ChatWidget.tsx`:
   ```typescript
   // TODO: Replace mock responses with actual API call
   const response = await fetch('/api/chat', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ message: text, history: messages })
   });
   ```

3. **Analytics**: Descomentar en `layout.tsx`:
   ```html
   <script defer src="/_vercel/insights/script.js"></script>
   ```

4. **Scheduling Links**: Actualizar URLs de Calendly/Cal.com en componentes CTA

## 🎯 Optimizaciones de Rendimiento

- **Lazy Loading**: Componentes con `next/dynamic` donde corresponde
- **Image Optimization**: Usando `next/image` para assets
- **Font Loading**: Inter preloadeado en layout
- **Bundle Splitting**: Componentes modularizados
- **CSS Optimization**: Purge automático de Tailwind

## 🔒 Accesibilidad

- **Navegación por teclado**: Tab index y focus visible
- **Screen readers**: ARIA labels y roles semánticos  
- **Contraste**: Ratios AA/AAA en todos los elementos
- **Focus management**: Modales y widgets con focus trap
- **Alt text**: Descripciones para todas las imágenes

## 🚀 Deploy

### Vercel (Recomendado)
```bash
vercel --prod
```

### Build para producción
```bash
npm run build
npm start
```

## 📊 Métricas de Rendimiento Objetivo

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

---

Desarrollado con ❤️ para automatizar el futuro de los negocios.