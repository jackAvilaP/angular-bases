import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
      {
      name: 'Trunks',
      power: 100
    },
  ];

  @Output()
  public onIndexCharacter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {

    if (!id) return;

    this.onIndexCharacter.emit(id)
  }
}
