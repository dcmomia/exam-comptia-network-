# MASTER CONTEXT: CompTIA Network+ Exam Book Project

## 1. Project Overview
- **Goal:** Create a high-quality EPUB exam book and an interactive web app from certification questions.
- **GitHub Repository:** [dcmomia/exam-comptia-network-](https://github.com/dcmomia/exam-comptia-network-)
- **Status:** Fully deployed and maintained.

---

## 2. Version History & Patch Notes

### v3.0.1 - Hotfix: Bootstrap & Encoding (Current)
- **Patch Description:** Emergency fix for app initialization and data corruption.
- **Key Changes:**
    - **Bootstrap Fix:** Removed obsolete `startBtn` references in `app.js` that caused script crashes.
    - **Encoding Restoration:** Repaired `questions_data.js` encoding (UTF-8 double-encoding issue).
    - **Pause Logic:** Unified `pauseExam`/`resumeExam` into a bidirectional `togglePause`.

### v3.0 - Platform Genesis

### v2.3 - Random Order Patch

### v2.1 - Persistence & Pause Logic
- **Patch Description:** Stability and session integrity update.
- **Key Changes:**
    - **Session Recovery:** `localStorage` persistence for answers, index, and time.
    - **Pause/Play System:** Unified toggle button with timer suspension and security overlay.
    - **Robustness:** Added `isDataLoaded` guards to prevent `NaN` errors during initialization.

### v2.0 - Interactive Exam SPA
- **Release Description:** Initial launch of the web-based exam engine.
- **Key Features:**
    - **Engine:** SPA with `index.html`, `styles.css`, and `app.js`.
    - **Analytics:** Integration of `Chart.js` for domain performance analysis.
    - **Data:** Migrated static JSON to global JS array for CORS-free hosting.

### v1.0 - Core EPUB Compilation
- **Release Description:** Processing sources and generating the final book.
- **Milestones:**
    - **OCR & Mining:** Extraction of 90 questions and mapping explanations from `CompTIA_Network_Guia_Estudio_COMPLETAhtml.epub`.
    - **v4 EPUB:** Final generation of the technically verified book in Spanish.

---

## 3. Operational Infrastructure
- **Hosting:** GitHub Pages.
- **Architecture:** Client-side only (SPA), Vanilla JS, CSS Custom Properties.
- **Data Model:** Structured JSON with domain mapping based on CompTIA official exam objectives.

## 4. Maintenance Notes
- **Lecciones de Robustez:** La carga diferida de datos debe estar siempre verificada antes de iniciar el motor de renderizado.
- **Selectores DOM:** Evitar referencias fuertes a elementos que pueden ser ocultados o eliminados dinámicamente; usar selectores de ID únicos.
- **Persistencia:** Priorizar la integridad del tiempo transcurrido mediante cálculos incrementales para evitar desfases por pausas.

