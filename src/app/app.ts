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
  // LÖSUNG: einsaetzeAnzahl = 5;

  // AUFGABE 1b: Erstelle eine Variable für dein Lieblings-THW-Fahrzeug
  // Tipp: lieblingsFahrzeug = '???';
  lieblingsFahrzeug = ''; // TODO: Setze hier ein Fahrzeug ein (z.B. 'MLW', 'GKW', 'LKW')
  // LÖSUNG: lieblingsFahrzeug = 'MLW';


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
    // Tipp: this.einsaetzeAnzahl = this.einsaetzeAnzahl + 1;
    // LÖSUNG: this.einsaetzeAnzahl = this.einsaetzeAnzahl + 1;
    // ALTERNATIV: this.einsaetzeAnzahl++;
  }

  // AUFGABE 2b: Erstelle eine Funktion, die den Helfer begrüßt
  begruesseHelfer() {
    // TODO: Zeige eine Nachricht mit dem Namen des Helfers
    // Tipp: alert('Hallo ' + this.helferName);
    // LÖSUNG: alert('Hallo ' + this.helferName);
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

    // LÖSUNG:
    // if (this.einsaetzeAnzahl > 5) {
    //   return 'MLW';
    // } else if (this.einsaetzeAnzahl > 2) {
    //   return 'GKW';
    // } else {
    //   return 'LKW';
    // }

    return 'LKW'; // TODO: Ersetze dies durch die if/else Logik!
  }


  // ========== AUFGABE 4: LISTEN ==========
  // TODO: Hier lernen die Schüler mit Arrays zu arbeiten

  // Beispiel-Liste (bereits vorgegeben):
  ausruestung = ['Helm', 'Warnweste', 'Handschuhe'];

  // AUFGABE 4a: Erweitere die Ausrüstungsliste
  fuegeAusruestungHinzu(gegenstand: string) {
    // TODO: Füge den neuen Gegenstand zur Liste hinzu
    // Tipp: this.ausruestung.push('Neuer Gegenstand');
    // LÖSUNG: this.ausruestung.push(gegenstand);
  }

  // AUFGABE 4b: Zähle die Anzahl der Ausrüstungsgegenstände
  zaehleAusruestung() {
    // TODO: Gib die Anzahl der Gegenstände zurück
    // Tipp: return this.ausruestung.length;
    return 0; // TODO: Ersetze 0 durch die richtige Berechnung!
    // LÖSUNG: return this.ausruestung.length;
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
}
