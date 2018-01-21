
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

    measurementSelected(event){
        this.selectedItem = event.model.item;
        this.closeAppDrawer();
    }

    closeAppDrawer(){
        this.$.appDrawer.close();
    }

    closeConversion(){
        this.selectedItem = null;
    }
}

window.customElements.define(UnitConverterApp.is, UnitConverterApp);
