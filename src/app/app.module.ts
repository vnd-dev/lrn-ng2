import { BrowserModule } from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { AppComponent } from "./app.component";
import {NgModelComponent} from '../ngModel/ngModel.component';
import {MyNgModelDirective} from "../ngModel/myNgModel.directive";
import {MyNgIfDirective} from "./../structuralDirectives/myNgIf.directive";
import {StructuralDirectiveComponent} from "./../structuralDirectives/structuralDirectives.component";
import {NgModule} from "@angular/core";


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, NgModelComponent, MyNgModelDirective, StructuralDirectiveComponent, MyNgIfDirective],
    bootstrap: [AppComponent]
})
export class AppModule{

}