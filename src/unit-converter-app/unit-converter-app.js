
/**
 * @customElement
 * @polymer
 */
class UnitConverterApp extends Polymer.Element {
    static get is() { return 'unit-converter-app'; }
    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'unit-converter-app'
            }
        };
    }
}

window.customElements.define(UnitConverterApp.is, UnitConverterApp);
