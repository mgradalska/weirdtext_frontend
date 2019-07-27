import {Component} from '@angular/core';
import {ApiService} from "./api.service";

@Component({
  templateUrl: './decoder.component.html',
})
export class DecoderComponent {
  public decodedText: String;

  constructor(private apiService: ApiService) {
  }

  decodeText(text: String) {
    this.apiService
      .decodeText(text)
      .subscribe({
        next: response => this.decodedText = response.result,
        error: err => console.log(err)
      });
  }
}
