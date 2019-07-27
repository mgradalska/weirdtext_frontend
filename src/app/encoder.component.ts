import {Component} from '@angular/core';
import {ApiService} from "./api.service";
import {finalize} from "rxjs/operators";

@Component({
    templateUrl: './encoder.component.html',
})
export class EncoderComponent {
    encodedText: String;
    error: String;
    loading: Boolean;

    constructor(private apiService: ApiService) {
    }

    encodeText(text: String) {
        this.loading = true;
        this.error = null;
        this.encodedText = null;
        this.apiService
            .encodeText(text)
            .pipe(finalize(() => this.loading = false))
            .subscribe({
                next: response => this.encodedText = response.result,
                error: err => this.error = err.error,
            });
    }
}
