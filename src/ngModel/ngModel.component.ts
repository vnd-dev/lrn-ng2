/**
 * Angular >= 2.x doesn’t come with such a (built-in) two-way data binding anymore.
 * There’s one directive in Angular >= 2.x that implements two-way data binding: ngModel.
 * On the surface, it looks and behaves as magical as we’re used to (from Angular 1).
 * But how does it really work? It’s not that hard really.
 * In fact, it turns out that two-way data binding really just boils down to event binding and property binding.
 */

import {Component} from "@angular/core";

@Component({
    selector: 'ng-model-comp',
    templateUrl: './ngModel.component.html'
})
export class NgModelComponent{
    private _username: string;

    public get username(): string{
        return this._username || '';
    }

    public set username(value: string){
        this._username = value;
    }
}