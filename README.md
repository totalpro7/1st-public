# Beispiel-Repository für GitHub-Grundlagen

Dieses Repo ist ein bewusst kleines, leicht verständliches **Lernprojekt**. Es zeigt dir, wie typische GitHub-Features funktionieren: Branches, Pull Requests, Issues, Actions (CI) und Releases.

## Projektidee (sehr simpel)
Wir haben eine Mini-Website mit einer Startseite und etwas JavaScript. Der Fokus liegt **nicht** auf der App, sondern darauf, wie man GitHub nutzt.

## So ist das Repo aufgebaut

```
.
├─ index.html
├─ src/
│  ├─ app.js
│  └─ style.css
└─ .github/
   └─ workflows/
      └─ ci.yml
```

## Was du hier lernen kannst

### 1) Branches
Wir haben/wollen ein paar Beispiel-Branches:
- `main` (Hauptzweig)
- `feature/dark-mode` (Beispiel-Feature)
- `fix/typo` (kleiner Fix)

**Übung:** Wechsel zwischen Branches und vergleiche die Änderungen.

### 2) Pull Requests (PRs)
Ein PR ist der Weg, Änderungen aus einem Branch nach `main` zu bringen.

**Übung:**
1. Erstelle einen neuen Branch.
2. Ändere eine Kleinigkeit.
3. Erstelle einen PR in GitHub.

### 3) Issues
Issues sind Aufgaben oder Bugs.

**Übung:** Erstelle ein Issue wie „Button-Text verbessern“ und verlinke einen PR.

### 4) GitHub Actions (CI)
Im Ordner `.github/workflows/ci.yml` liegt eine einfache CI-Pipeline.
Sie läuft bei Push/PR und führt einen kleinen Check aus.

### 5) Releases & Tags (optional)
Erstelle einen Tag wie `v1.0.0` und eine Release-Notiz.

## Schnellstart lokal

```bash
git clone <dein-fork-url>
cd beispiel-repo
```

Öffne `index.html` im Browser.

## Nächste Lernaufgabe
- Erstelle einen neuen Branch `feature/hello`.
- Ändere die Überschrift in `index.html`.
- Erstelle einen PR und merge ihn.

Viel Spaß beim Lernen!
