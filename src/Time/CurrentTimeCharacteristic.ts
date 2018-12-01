import * as bleno from 'bleno';

export class CurrentTimeCharacteristic extends bleno.Characteristic {
	public constructor() {
		super({
			uuid: '2A2B',
			properties: ['read', 'write'],
			descriptors: [],
		})
	}

	public onReadRequest(_offset: number, callback: (result: number, data?: Buffer) => void) {
		const now = new Date();
		const buf = Buffer.from(now.valueOf().toString(), 'utf8');
		console.log('Reading current time', now.valueOf().toString(), '\n\n');
		callback(this.RESULT_SUCCESS, buf);
	}

	public onWriteRequest(
		data: Buffer,
        offset: number,
        _withoutResponse: boolean,
        callback: (result: number) => void
	) {
		if (offset) {
			console.log('this.RESULT_ATTR_NOT_LONG')
			callback(this.RESULT_ATTR_NOT_LONG);
		} else {
			const decoded = String.fromCharCode.apply(null, new Uint16Array(data));
			const date = new Date(parseInt(decoded));
			console.log('Saving current time', date.toISOString(), '\n\n');
			callback(this.RESULT_SUCCESS);
		}
	}
}
