import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
    selector: '[range]'
})
export class RangeDirective {
    constructor(private _templateRef: TemplateRef<any>, private _viewContainer: ViewContainerRef){
        
    }

    @Input()
    set range(value: number[]){
        for(let num = value[0]; num <= value[1]; num++)
        {
            this._viewContainer.createEmbeddedView(this._templateRef, {
                $implicit: num
            })
        }        
    }
}