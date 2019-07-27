import {Component} from '@angular/core';
import {ApiService} from "./api.service";
import {finalize} from "rxjs/operators";

@Component({
    templateUrl: './decoder.component.html',
})
export class DecoderComponent {
    decodedText: String;
    error: String;
    loading: Boolean;

    constructor(private apiService: ApiService) {
    }

    decodeText(text: String) {
        this.error = null;
        this.decodedText = null;
        this.loading = true;
        this.apiService
            .decodeText(text)
            .pipe(finalize(() => this.loading = false))
            .subscribe({
                next: response => this.decodedText = response.result,
                error: err => this.error = err.error
            });
    }
}
