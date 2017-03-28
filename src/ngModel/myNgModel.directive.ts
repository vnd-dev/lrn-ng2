import {Directive, Input, Output, EventEmitter, OnInit, ElementRef} from "@angular/core";

@Directive({
    selector: "[myNgModel]", // wrapped in [] to make this as attribute directive
    inputs:['value:myNgModel'],
    host: {
        '(input)': 'onInputEventReceived($event.target)'
    },
    outputs: ['myNgModelChange']
})
export class MyNgModelDirective implements OnInit {
    private _underlyingElement: ElementRef;
    private _value: any;
    public myNgModelChange: EventEmitter<any>;

    constructor(element: ElementRef){
        this._underlyingElement = element;
        this.myNgModelChange = new EventEmitter<any>();
    }

    get value(): any{
        return this._value;
    }

    set value(newValue: any){

        if(this._value === newValue)
            return;
        
        this._value = newValue;
        this._underlyingElement.nativeElement.value = newValue;
    }
    
    ngOnInit(): void {

    }

    onInputEventReceived(targetElement){
        this.value = targetElement.value;
        this.myNgModelChange.emit(this._value);
    }
}
