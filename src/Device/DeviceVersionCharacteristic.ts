import * as bleno from 'bleno';

export class DeviceVersionCharacteristics extends bleno.Characteristic {
	public constructor() {
		super({
			uuid: '9911',
			properties: ['read'],
			descriptors: [
				new bleno.Descriptor({
					uuid: '9911D1',
					value: 'Semver version',
				})
			]
		})
	}

	public onReadRequest(_offset: number, callback: (result: number, data?: Buffer) => void) {
		const buf = Buffer.from('1.0.1', 'utf8');
		callback(this.RESULT_SUCCESS, buf);
	}
}
