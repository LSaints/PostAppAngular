import { Component } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss'
})
export class TextEditorComponent {
  textClick() {
    window.location.pathname = "post/create";
  }
}
