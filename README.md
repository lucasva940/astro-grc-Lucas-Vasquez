este projecto es una pagina web sobre el Liceo Galbarino Riveros de castro.

aqui vera el codigo de este projecto , que cuenta con astro y tailwind:
.```bash
├── public/
│   └── imagenes/       
├── src/
│   ├── components/     
│   │   ├── header.astro
│   │   ├── footer.astro
│   │   └── tarjeta.astro   
│   │
│   ├── data/         
│   │   ├── noticias.json
│   │   ├── profesores.json
│   │   ├── asistentes.json
│   │   └── ... (y otros JSON para cada sección)
│   │
│   ├── layouts/
│   │   └── Layout.astro 
│   │
│   ├── pages/         
│   │   ├── index.astro   (Homepage)
│   │   ├── profesores.astro
│   │   ├── convivencia.astro
│   │   └── noticias/
│   │       └── [id].astro  
│   │
│   └── styles/
│       └── global.css 
│
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
