# MASTER CONTEXT: CompTIA Network+ Exam Book Project

## 1. Project Overview
- **Goal:** Create a high-quality EPUB exam book and an interactive web app from certification questions.
- **GitHub Repository:** [dcmomia/exam-comptia-network-](https://github.com/dcmomia/exam-comptia-network-)
- **Status:** Fully deployed and maintained.

---

## 2. Version History & Patch Notes

### v3.1 - Book v5 Synchronization
- **Patch Description:** Full reference synchronization with CompTIA Network+ Book v5.
- **Key Achievements:**
    - **Structure Mapping:** Updated references to match the new 22-chapter structure.
    - **New Content:** Integrated references for SSE/SASE, VXLAN/VNI, and Heat-Maps.
    - **Renumbering:** Corrected chapter shifts (Subnetting Ch 4 -> Ch 6, Cloud Ch 8 -> Ch 3).
    - **Accuracy:** 100% of simulator questions now point to valid Book v5 sections.

### v3.0 - Exam 2 Integration (Current)
- **Patch Description:** Complete extraction and processing of CompTIA Network+ Exam 2.
- **Key Achievements:**
    - **Image Processing:** Extracted 80 questions from 90 source images in `img_source/Examen2/`
    - **Batch Processing:** Organized into 7 batch files for efficient processing:
        - Batch 1: Questions 1-10 (Network fundamentals, OSI model)
        - Batch 2: Questions 11-17 (Wireless, VPN, subnetting)
        - Batch 3: Questions 18-28 (Security protocols, DHCP, routing)
        - Batch 4: Questions 29-45 (Network tools, troubleshooting, QoS)
        - Batch 5: Questions 46-58 (DNS, security attacks, multicast)
        - Batch 6: Questions 59-75 (IAM, change management, advanced topics)
        - Batch 7: Questions 76-80 (Storage networks, VPN tunneling)
    - **Technical Translation:** High-fidelity Spanish translation of all technical terms
    - **Consolidation:** Single unified file `examen2_completo.json` with 80 questions
- **File Structure:**
    - Source: `img_source/Examen2/` (90 PNG screenshots)
    - Output: `temp/examen2_batch[1-7].json` + `temp/examen2_completo.json`

### v2.2 - Advanced Filtering & Layout
- **Patch Description:** Real-time domain filtering and structural UI correction.
- **Key Changes:**
    - **Filtered Engine:** Implemented `filteredQuestions` logic. Navigation and counters now respect the selected domain.
    - **Sidebar Redesign:** Fixed grid layout to ensure a solid, sticky left column. Removed restrictive `overflow: hidden`.
    - **Context-Aware Results:** Final percentages and charts now calculate based on the active filter.
    - **UI Polish:** Full-width adaptive container (max-width: 1200px).

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
    - **OCR & Mining:** Extraction of 90 questions from Exam 1 and mapping explanations from `CompTIA_Network_Final.epub`.
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
- **Procesamiento de Imágenes:** Al extraer preguntas de imágenes, es común que algunas imágenes sean de contexto o portadas. Total de imágenes ≠ total de preguntas.
- **Traducción Técnica:** Mantener consistencia en la traducción de términos técnicos (e.g., "switch" permanece como "switch", no "conmutador").

---

## 5. Next Steps & Roadmap

### Immediate Tasks
- [x] **Integration:** Merge `examen2_completo.json` with existing question database
- [/] **Web App Update:** Add Exam 2 questions to the interactive exam interface
- [/] **EPUB v5:** Generate updated EPUB including both Exam 1 and Exam 2 (170 total questions)
- [x] **Ref Sync:** Synchronize all question references with Book v5 structure
- [ ] **Testing:** Validate all questions display correctly in both web and EPUB formats

### Future Enhancements
- [ ] **Multi-Exam Mode:** Allow users to select which exam to practice (Exam 1, Exam 2, or Both)
- [ ] **Performance Analytics:** Track performance separately for each exam
- [ ] **Question Metadata:** Add difficulty ratings and topic tags for better filtering
- [ ] **Study Mode:** Implement spaced repetition algorithm for optimal learning

### Data Quality
- **Exam 1:** 90 questions (fully integrated)
- **Exam 2:** 91 questions (integrated with images)
- **Total Available:** 181 questions
- **Target:** 180+ questions for comprehensive certification preparation

