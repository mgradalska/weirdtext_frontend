import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EncoderComponent} from "./encoder.component";
import {DecoderComponent} from "./decoder.component";


const routes: Routes = [
    {path: 'decode', component: DecoderComponent},
    {path: 'encode', component: EncoderComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
