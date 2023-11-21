import { Component } from '@angular/core';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ex5';
  notes: string[] = [];
  _notes: string = '';
  sousnote: string = '';

  constructor(private notesService: NotesService) {}

  addNote() {
    this.notesService.addNote(this._notes);
    this._notes = '';
  }

  deleteNote(index: number) {
    this.notesService.deleteNote(index);
  }

  getNotes() {
    this.notes = this.notesService.notes;
  }

  ajoutsousliste() {
    const lastNoteIndex = this.notes.length - 1;
    if (lastNoteIndex >= 0) {
      this.notesService.ajoutsousliste(this._notes, lastNoteIndex);
      this._notes = '';
    }
  }

  getSubNotes(index: number) {
    return this.notesService.getSousListes(index);
  }
}
