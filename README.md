# Grupo TFP Chile — Sitio web (borrador)

Landing page profesional y minimalista para **Grupo TFP Chile — Sociedad de Estudios en TFP**.

Sitio estático en HTML + CSS + JS (sin dependencias ni build step).

---

## Estructura del proyecto

```
Web-TFP/
├── index.html              ← página principal
├── tfp.html                ← detalle: ¿Qué es TFP?
├── README.md               ← este archivo
├── PALETTE.md              ← paleta de colores documentada
│
├── css/
│   └── styles.css          ← estilos compartidos
│
├── js/
│   └── script.js           ← menú móvil, año, TOC activo
│
└── assets/
    ├── logos/
    │   ├── logo-tfp.png
    │   ├── logo-tfp-recuadro.png
    │   ├── logo-tfp-blanco.png
    │   ├── logo-tfp-blanco-recuadro.png
    │   └── logo-tfp-extendido.png
    └── team/
        ├── equipo-grupo-tfp.jpg    ← foto grupal (provisoria)
        └── placeholder.svg         ← silueta para fotos individuales (provisoria)
```

---

## Cómo abrirlo en Visual Studio Code

1. Abrir VS Code.
2. `Archivo → Abrir carpeta…` y seleccionar `Web-TFP`.
3. Abrir `index.html` en el editor.

### Para ver el sitio en el navegador

**Opción A — Live Server (recomendado).** Instalar la extensión *Live Server* de Ritwick Dey. Luego, clic derecho sobre `index.html` → *Open with Live Server*. Se abrirá en `http://127.0.0.1:5500/` y hará *hot reload* al guardar.

**Opción B — Abrir directo.** Doble clic en `index.html` y el navegador lo abre como archivo local (`file://…`). Funciona, pero sin hot reload.

**Opción C — Servidor local con Python.**
```bash
cd Web-TFP
python3 -m http.server 8000
# abrir http://localhost:8000
```

---

## Secciones del sitio

### `index.html`
- **Hero** — titular + descripción + CTAs.
- **Nosotros** — presentación del grupo con pilares (Clínica · Formación · Supervisión).
- **Equipo** — foto grupal + tarjetas individuales (6 integrantes).
- **¿Qué es TFP?** — resumen con links a la página detallada.
- **Colaboraciones** — TFP Hispanoamérica, MIDAP, UV, Jornadas TSP, ISTFP, ISSPD.
- **Contacto** — email placeholder, ubicación.
- **Footer** — navegación + logo blanco.

### `tfp.html`
- Página dedicada al modelo TFP con TOC lateral sticky:
  - Introducción · Fundamentos teóricos · ¿Para quiénes? · Cómo funciona · Evidencia científica · Referencias.

---

## Paleta de colores

Ver [`PALETTE.md`](PALETTE.md) para el detalle. Derivada del logo oficial, sin negro puro en primarios.

| Token      | HEX       | Uso                                   |
|------------|-----------|---------------------------------------|
| `--navy`   | `#1F3557` | Titulares y acentos serios            |
| `--steel`  | `#6E88A6` | Azul acero (del rectángulo del logo)  |
| `--ink`    | `#1E2A3B` | Texto principal                       |
| `--muted`  | `#5C6B7E` | Texto secundario                      |
| `--line`   | `#E4EAF0` | Bordes / separadores                  |
| `--accent` | `#C9A67B` | Beige cálido (subrayados, hover)      |

---

## Pendientes de contenido

Cuando estén disponibles, reemplazar los placeholders:

- [ ] **Fotos individuales del equipo** — reemplazar `assets/team/placeholder.svg` por fotografías reales en cada `<img>` dentro de las 6 `.team-card` de `index.html`. Eliminar también el `<span class="team-card__placeholder-note">` de cada tarjeta.
- [ ] **Foto grupal definitiva** — reemplazar `assets/team/equipo-grupo-tfp.jpg` (mantener el nombre) y quitar *"(Fotografía provisoria)"* del caption en `index.html`.
- [ ] **Mail de contacto real** — buscar `contacto@grupotfpchile.cl` en `index.html` y reemplazar; eliminar el `.contact-card__hint`.
- [ ] **Expandir contenido de `tfp.html`** si se requiere más profundidad teórica.

---

## Tipografías

Cargadas desde Google Fonts en el `<head>`:

- **Cormorant Garamond** — titulares (tono académico, eco del "GRUPO" del logo).
- **Inter** — cuerpo.

---

## Notas técnicas

- El sitio es 100 % estático, sin build ni dependencias.
- Responsive breakpoints a **880 px** (layout) y **720 px** (menú hamburguesa).
- Usa `IntersectionObserver` para resaltar la sección activa en el TOC de `tfp.html`.
- Todos los enlaces externos abren en pestaña nueva con `rel="noopener noreferrer"`.
