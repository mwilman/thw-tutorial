import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'THW Programmier-Tutorial';

  // ========== AUFGABE 1: VARIABLEN ==========
  // TODO: Hier sollen die Schüler ihre ersten Variablen erstellen

  // Beispiel-Variablen (bereits vorgegeben):
  thwOrtsverband = 'Musterstadt';
  helferName = 'Max Mustermann';

  // AUFGABE 1a: Erstelle eine Variable für die Anzahl der Einsätze dieses Jahr
  // Tipp: einsaetzeAnzahl = ???;
  einsaetzeAnzahl = 0; // TODO: Setze hier eine Zahl ein!

  // AUFGABE 1b: Erstelle eine Variable für dein Lieblings-THW-Fahrzeug
  // Tipp: lieblingsFahrzeug = '???';
  lieblingsFahrzeug = ''; // TODO: Setze hier ein Fahrzeug ein (z.B. 'MLW', 'GKW', 'LKW')


  // ========== AUFGABE 2: FUNKTIONEN ==========
  // TODO: Hier lernen die Schüler, wie Funktionen funktionieren

  // Beispiel-Funktion (bereits vorgegeben):
  zeigeWillkommensnachricht() {
    alert('Willkommen beim THW Programmier-Tutorial!');
  }

  // AUFGABE 2a: Erstelle eine Funktion, die einen Einsatz startet
  // Tipp: Die Funktion soll die einsaetzeAnzahl um 1 erhöhen
  starteEinsatz() {
    // TODO: Erhöhe hier die einsaetzeAnzahl um 1
    // Denk daran, wie man Zahlen größer macht
    // Tipp: return this.einsaetzeAnzahl = ...;
    // Tipp2: "variable = variable - 5" würde die Zahl um 5 verringern
  }

  // AUFGABE 2b: Erstelle eine Funktion, die den Helfer begrüßt
  begruesseHelfer() {
    // TODO: Zeige eine Nachricht mit dem Namen des Helfers
    // Tipp: alert('Hallo ' + this.thwOrtsverband); <= würde "Hallo Musterstadt" anzeigen
  }


  // ========== AUFGABE 3: BEDINGUNGEN ==========
  // TODO: Hier lernen die Schüler if/else Statements

  // Beispiel-Bedingung (bereits vorgegeben):
  istErfahrenerHelfer() {
    return this.einsaetzeAnzahl > 10;
  }

  // AUFGABE 3a: Erstelle eine Funktion, die das richtige Fahrzeug empfiehlt
  empfahleFahrzeug() {
    // TODO: Verwende if/else um verschiedene Fahrzeuge zu empfehlen
    // Wenn einsaetzeAnzahl > 5: empfehle "MLW"
    // Wenn einsaetzeAnzahl > 2: empfehle "GKW"
    // Sonst: empfehle "LKW"

    return 'LKW'; // TODO: Ersetze dies durch die if/else Logik!
  }


  // ========== AUFGABE 4: LISTEN ==========
  // TODO: Hier lernen die Schüler mit Arrays zu arbeiten

  // Beispiel-Liste (bereits vorgegeben):
  ausruestung = ['Helm', 'Warnweste', 'Handschuhe'];

  // AUFGABE 4a: Erweitere die Ausrüstungsliste
  fuegeAusruestungHinzu(gegenstand: string) {
    // TODO: Füge den neuen Gegenstand zur Liste hinzu
    // Tipp: this.ausruestung.push('Neuer Gegenstand'); => würde immer "Neuer Gegenstand" hinzufügen
    // Tipp2: Du kannst den Parameter "gegenstand" verwenden, um den Namen des Gegenstands zu übergeben
  }

  // AUFGABE 4b: Zähle die Anzahl der Ausrüstungsgegenstände
  zaehleAusruestung() {
    // TODO: Gib die Anzahl der Gegenstände zurück
    // Tipp: return this.ausruestung.l...;
    return 0; // TODO: Ersetze 0 durch die richtige Berechnung!
  }


  // ========== BONUS-FUNKTIONEN ==========
  // Diese sind schon fertig - zum Experimentieren!

  resetteEinsaetze() {
    this.einsaetzeAnzahl = 0;
    alert('Einsatzzähler wurde zurückgesetzt!');
  }

  zeigeProgrammierTipp() {
    const tipps = [
      'Variablen speichern Daten - wie Karteikästen!',
      'Funktionen sind wie Rezepte - sie führen Schritte aus!',
      'Bedingungen helfen dem Computer zu entscheiden!',
      'Listen speichern viele Dinge auf einmal!'
    ];
    const zufallsTipp = tipps[Math.floor(Math.random() * tipps.length)];
    alert('💡 Programmier-Tipp: ' + zufallsTipp);
  }

  // ========== NAVIGATION FUNKTIONEN ==========

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // ========== LÖSUNGEN ==========
  // 🚨 ACHTUNG: Nur schauen, wenn du wirklich nicht weiterkommst! 🚨
  // Versuche erst selbst, die Aufgaben zu lösen!

  /*
  LÖSUNG AUFGABE 1a:
  einsaetzeAnzahl = 5;

  LÖSUNG AUFGABE 1b:
  lieblingsFahrzeug = 'MLW';

  LÖSUNG AUFGABE 2a:
  starteEinsatz() {
    this.einsaetzeAnzahl = this.einsaetzeAnzahl + 1;
    // ALTERNATIV: this.einsaetzeAnzahl++;
  }

  LÖSUNG AUFGABE 2b:
  begruesseHelfer() {
    alert('Hallo ' + this.helferName);
  }

  LÖSUNG AUFGABE 3a:
  empfahleFahrzeug() {
    if (this.einsaetzeAnzahl > 5) {
      return 'MLW';
    } else if (this.einsaetzeAnzahl > 2) {
      return 'GKW';
    } else {
      return 'LKW';
    }
  }

  LÖSUNG AUFGABE 4a:
  fuegeAusruestungHinzu(gegenstand: string) {
    this.ausruestung.push(gegenstand);
  }

  LÖSUNG AUFGABE 4b:
  zaehleAusruestung() {
    return this.ausruestung.length;
  }
  */
}
