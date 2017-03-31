import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
    selector: '[myNgIf]'
})
export class MyNgIfDirective{

    constructor(private _templateRef: TemplateRef<any>, private _containerRef: ViewContainerRef){

    }

    @Input()
    set myNgIf(value: boolean){

        if(value)
            {
                // container(in this case the commented line which will be created in the html built) ref will create a sibling and add the html which is present in the templateRef
                this._containerRef.createEmbeddedView(this._templateRef);
            }
            else{
                this._containerRef.clear();
            }
    }
}