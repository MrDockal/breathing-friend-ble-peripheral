import * as bleno from 'bleno';

export class BatteryLevelCharacteristic extends bleno.Characteristic {
	public constructor() {
		super({
			uuid: '2A19',
			properties: ['read'],
			descriptors: [],
		})
	}

	public onReadRequest(_offset: number, callback: (result: number, data?: Buffer) => void) {
		const buf = Buffer.from('60', 'utf8'); //60% of battery
		callback(this.RESULT_SUCCESS, buf);
	}
}
