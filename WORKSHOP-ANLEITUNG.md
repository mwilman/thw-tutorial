# 🚨 THW Programmier-Workshop - Anleitung für Leiter

## 📋 Vorbereitung des Workshops

### Voraussetzungen
- Node.js installiert (Version 18+)
- Angular CLI installiert (`npm install -g @angular/cli`)
- Code-Editor (VS Code empfohlen)
- Browser (Chrome/Firefox)

### Workshop-Setup (15 Minuten vor Beginn)
1. Projekt klonen/herunterladen
2. `npm install` ausführen
3. `npm start` testen
4. Browser auf `http://localhost:4200` öffnen

## 🎯 Workshop-Ablauf (90-120 Minuten)

### Einführung (15 Minuten)
- Begrüßung und Vorstellung
- "Was ist Programmieren?" - Alltagsbeispiele
- Projektübersicht zeigen
- Entwicklungsumgebung erklären

### Teil 1: Variablen (20 Minuten)

**Erklärung für Schüler:**
- "Variablen sind wie Karteikästen - sie speichern Informationen"
- Beispiele: Name, Alter, Anzahl Einsätze

**Aufgaben:**
1. `einsaetzeAnzahl = 5` setzen
2. `lieblingsFahrzeug = 'MLW'` setzen
3. Änderungen in der Webseite beobachten

**Lösungen:**
```typescript
einsaetzeAnzahl = 5; // Statt 0
lieblingsFahrzeug = 'MLW'; // Statt ''
```

### Teil 2: Funktionen (25 Minuten)

**Erklärung für Schüler:**
- "Funktionen sind wie Rezepte - sie führen Schritte aus"
- Beispiel: Kochrezept, Einsatz-Checkliste

**Aufgaben:**
1. `starteEinsatz()` vervollständigen
2. `begruesseHelfer()` vervollständigen
3. Buttons testen

**Lösungen:**
```typescript
starteEinsatz() {
  this.einsaetzeAnzahl = this.einsaetzeAnzahl + 1;
  // oder: this.einsaetzeAnzahl++;
}

begruesseHelfer() {
  alert('Hallo ' + this.helferName);
}
```

### Teil 3: Bedingungen (20 Minuten)

**Erklärung für Schüler:**
- "if/else ist wie eine Entscheidung treffen"
- Beispiel: "Wenn Regen, dann Regenkleidung"

**Aufgabe:**
- Code in `empfahleFahrzeug()` verstehen
- Einsätze erhöhen und Änderungen beobachten

**Bereits implementiert - nur verstehen!**

### Teil 4: Listen (25 Minuten)

**Erklärung für Schüler:**
- "Listen sind wie Einkaufslisten - mehrere Dinge auf einmal"
- Beispiel: Ausrüstungsliste, Helfer-Liste

**Aufgabe:**
```typescript
zaehleAusruestung() {
  return this.ausruestung.length;
}
```

### Abschluss & Bonus (15 Minuten)
- Bonus-Features ausprobieren
- Eigene Ideen umsetzen
- Fragen & Antworten

## 🔧 Häufige Probleme & Lösungen

### Problem: "Seite lädt nicht"
- **Lösung:** `npm start` erneut ausführen
- Browser-Cache leeren (Strg+F5)

### Problem: "Änderungen werden nicht angezeigt"
- **Lösung:** Datei speichern (Strg+S)
- Browser aktualisieren

### Problem: "Funktion funktioniert nicht"
- **Lösung:** Entwicklertools öffnen (F12)
- Console-Fehler prüfen
- Syntaxfehler suchen (fehlende Anführungszeichen, Klammern)

### Problem: "Button macht nichts"
- **Lösung:** Funktion vervollständigen
- `alert()` hinzufügen zum Testen

## 💡 Tipps für Workshop-Leiter

### Erklärungsansätze
- **Variablen:** "Wie ein Notizbuch-Eintrag"
- **Funktionen:** "Wie ein THW-Befehl: 'Einsatz starten!'"
- **Bedingungen:** "Wie Einsatzentscheidungen"
- **Listen:** "Wie eine Ausrüstungs-Checkliste"

### Motivation aufrechterhalten
- Kleine Erfolge feiern
- Bei Fehlern: "Fehler sind normal und wichtig!"
- THW-Bezug immer herstellen
- Interaktive Elemente nutzen

### Differenzierung
- **Schnelle Schüler:** Bonus-Aufgaben, eigene Funktionen
- **Langsamere Schüler:** Paar-Programmierung, mehr Hilfestellung
- **Verschiedene Lerntypen:** Visuell (Webseite), Auditiv (Erklärungen), Haptisch (Tippen)

## 📚 Erweiterungsideen

### Für fortgeschrittene Gruppen
1. Weitere Fahrzeuge hinzufügen
2. Helfer-Liste erstellen
3. Einsatz-Historie speichern
4. CSS-Farben ändern

### Für den nächsten Workshop
1. Lokale Speicherung (localStorage)
2. Formular für neue Helfer
3. Einsatz-Statistiken
4. THW-Quiz Integration

## 🎯 Lernziele Überprüfung

Nach dem Workshop sollten die Schüler:
- ✅ Wissen, was Variablen sind und wie man sie nutzt
- ✅ Verstehen, wie Funktionen aufgerufen werden
- ✅ Grundlagen von if/else verstehen
- ✅ Listen verwenden können
- ✅ Spaß am Programmieren entwickelt haben
- ✅ Verbindung zwischen Programmierung und THW-Arbeit sehen

## 📞 Support

Bei technischen Problemen:
1. Entwicklertools (F12) prüfen
2. `npm install` erneut ausführen
3. Projekt neu starten
4. Als letzter Ausweg: Projekt neu herunterladen

---
**Viel Erfolg beim Workshop! 🎉**
