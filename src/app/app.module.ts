import { BrowserModule } from "@angular/platform-browser";
import {FormsModule} from "@angular/forms"
import { AppComponent } from "./app.component";
import {NgModelComponent} from '../ngModel/ngModel.component'
import {NgModule} from "@angular/core";


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, NgModelComponent],
    bootstrap: [AppComponent]
})
export class AppModule{

}