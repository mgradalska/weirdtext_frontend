import {Component} from '@angular/core';
import {ApiService} from "./api.service";

@Component({
  templateUrl: './encoder.component.html',
})
export class EncoderComponent {
  public encodedText: String;

  constructor(private apiService: ApiService) {
  }

  encodeText(text: String) {
    this.apiService
      .encodeText(text)
      .subscribe({
        next: response => this.encodedText = response.result,
        error: err => console.log(err)
      });
  }
}
