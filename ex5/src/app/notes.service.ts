import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: string[] = [];
  sousnotes: string[][] = [];

  addNote(note: string) {
    this.notes.push(note);
    this.sousnotes.push([]); 
  }

  deleteNote(index: number) {
      this.notes.splice(index, 1);
      this.sousnotes.splice(index, 1); 
  }

  ajoutsousliste(sousnote: string, index: number) {
      this.sousnotes[index].push(sousnote);
  }

  getSousListes(index: number): string[] {
    if (index >= 0 && index < this.sousnotes.length) {
      return this.sousnotes[index];
    } else {
      return [];
    }
  }
}
