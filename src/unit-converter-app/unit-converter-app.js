
/**
 * @customElement
 * @polymer
 */
class UnitConverterApp extends Polymer.Element {
    static get is() { console.log(units); return 'unit-converter-app'; }
    static get properties() {
        return {
            unitData: {
                type: Array
            },
            showClose: {
                type: Boolean,
                value: false
            },
            selectedItem: {
                type: Object,
                observer: "_selectedItemChanged"
            },
            selectedUnit: {
                type: Number,
                observer: "_selectedUnitChanged"
            },
            inputValue: {
                type: Number,
                observer: "_inputValueChanged"
            },
            convertedValue: {
                type: Number,
                value: 0
            },
            isEnteredValueInvalid: {
                type: Boolean
            }
        };
    }
    
    connectedCallback(){
        super.connectedCallback();
        this.unitData = units;
    }

    _selectedItemChanged(newValue, oldValue){
        if(null == newValue){
            this.showClose = false;    
        }else{
            this.showClose = true;
        }
    }

    _selectedUnitChanged(newValue, oldValue){
        this.convertedValue = 
            this.inputValue * this.selectedItem.calculations[newValue].valueInBaseUnit;
    }

    _inputValueChanged(newValue, oldValue) {
        this.convertedValue =
            newValue * this.selectedItem.calculations[this.selectedUnit].valueInBaseUnit;

    }

    measurementSelected(event){
        this.selectedItem = event.model.item;
        this.selectedUnit = 0;
        console.log(this.selectedItem);
        this.closeAppDrawer();
    }

    closeAppDrawer(){
        if(!this.$.appDrawer.persistent){
            this.$.appDrawer.close();
        }
    }

    closeConversion(){
        this.selectedItem = null;
    }

    divide(a, b){
        if(a && b){
            return a / b;
        }else{
            return 0;
        }
    }

}

window.customElements.define(UnitConverterApp.is, UnitConverterApp);
