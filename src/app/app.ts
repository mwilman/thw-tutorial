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
  // TODO: Hier erstellst du deine ersten Variablen

  // Beispiel-Variablen (bereits vorgegeben):
  thwOrtsverband = 'Musterstadt';
  helferName = 'Max Mustermann';

  // AUFGABE 1a: Erstelle eine Variable für die Anzahl der Einsätze dieses Jahr
  einsaetzeAnzahl = 0 // TODO: Setze hier eine Zahl ein!

  // AUFGABE 1b: Erstelle eine Variable für dein Lieblings-THW-Fahrzeug
  lieblingsFahrzeug = ''; // TODO: Setze hier ein Fahrzeug ein (z.B. 'MLW', 'GKW', 'LKW')




  // ========== AUFGABE 2: FUNKTIONEN ==========
  // TODO: Hier lernst du, wie Funktionen funktionieren

  // Beispiel-Funktion (bereits vorgegeben):
  zeigeWillkommensnachricht() {
    alert('Willkommen beim THW Programmier-Tutorial!');
  }

  // AUFGABE 2a: Erstelle eine Funktion, die einen Einsatz startet.
  // Die Funktion soll die einsaetzeAnzahl um 1 erhöhen
  starteEinsatz() {
    // TODO: Erhöhe hier die einsaetzeAnzahl um 1
    // Tipp 1: "variable = variable - 5" würde die Zahl um 5 verringern
    // Tipp 2: Um die Variable hier verwenden zu können, hänge "this." vorne an: this.variable
  }



  // AUFGABE 2b: Erstelle eine Funktion, die den Helfer begrüßt
  begruesseHelfer() {
    // TODO: Zeige eine Nachricht mit dem Namen des Helfers
    // Tipp 1: Schaue dir oben an, wie die Willkommensnachricht ausgegeben wird: alert(...);
    // Tipp 2: Du kannst den Text in einer Variablen wie folgt ausgeben: ("Text" + this.variable)
  }





  // ========== AUFGABE 3: BEDINGUNGEN ==========
  // TODO: Hier lernst du Bedingungen (if/else Statements)

  // Beispiel-Bedingung (bereits vorgegeben):
  istErfahrenerHelfer() {
    if (this.einsaetzeAnzahl > 10) {
      return true;
    } else {
      return false;
    }
  }

  // AUFGABE 3a: Erstelle eine Funktion, die das richtige Fahrzeug empfiehlt
  empfehleFahrzeug() {
    // TODO: Verwende if/else um verschiedene Fahrzeuge zu empfehlen
    // Wenn einsaetzeAnzahl > 5: empfehle "MLW"
    // Wenn einsaetzeAnzahl > 2: empfehle "GKW"
    // Sonst: empfehle "LKW"
    // Tipp 1: Orientiere dich an der vorigen Funktion.
    // Tipp 2: du kannst auch nach einem else if überprüfen: ...} else if (a > b) {...

    return 'LKW';
  }






  // ========== AUFGABE 4: LISTEN ==========
  // TODO: Hier lernen die Schüler mit Arrays zu arbeiten

  // Beispiel-Liste (bereits vorgegeben):
  ausruestung = ['Helm', 'Warnweste', 'Handschuhe'];


  // AUFGABE 4a: Erweitere die Ausrüstungsliste
  fuegeAusruestungHinzu(gegenstand: string) {
    // TODO: Füge den neuen Gegenstand zur Liste hinzu
    // Tipp 1: this.ausruestung ist die Liste der Ausrüstungsgegenstände
    // Tipp 2: Mit liste.push(); fügst du das, was in den runden Klammern steht, zu liste hinzu
    // Tipp 3: Du kannst den Parameter "gegenstand" verwenden, um den Namen des Gegenstands zu übergeben: An anderer Stelle im Code wird für "gegenstand" ein passender Wert (Taschenlampe, Funkgerät usw.) eingesetzt.
  }

  // AUFGABE 4b: Zähle die Anzahl der Ausrüstungsgegenstände
  zaehleAusruestung() {
    // TODO: Gib die Anzahl der Gegenstände zurück
    // Tipp 1: liste.length liefert die Länge einer Liste
    // Tipp 2: Um die Anzahl zurückzugeben, nutze return ...;
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
  empfehleFahrzeug() {
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
