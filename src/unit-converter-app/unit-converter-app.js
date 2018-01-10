
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
            }
        };
    }
    
    connectedCallback(){
        super.connectedCallback();
        this.unitData = units;
    }
}

window.customElements.define(UnitConverterApp.is, UnitConverterApp);
