import * as bleno from 'bleno';
import { objectValues } from '../core/objectValues';
import { modes } from '../core/storageMocks';

export interface BreathingDefinition {
	uid: string;
	speed: number;
	cycleSpeedStart: number;
	cycleSpeedEnd: number;
	duration: number;
	freqIn: number;
	freqHold1: number
	freqOut: number;
	freqHold2: number;
}

export class ModeServiceCharacteristic extends bleno.Characteristic {
	public constructor() {
		super({
			uuid: '9921',
			properties: ['read', 'write'],
			descriptors: [
				new bleno.Descriptor({
					uuid: '9921D1',
					value: 'Stored breathing modes as json encoded',
				})
			]
		});
	}

	public onReadRequest(offset: number, callback: (result: number, data?: Buffer) => void) {
		const stringified = this.encodeModesForBluetoothBuffer();
		const buf = Buffer.from(stringified.slice(offset), 'utf8');
		console.log('Reading mode characteristics \n\n');
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
			console.log('WRITE mode characteristics', decoded, '\n\n');
			callback(this.RESULT_SUCCESS);
		}
	}

	private encodeModesForBluetoothBuffer() {
		const simplyfied = modes.map((mode: BreathingDefinition) => objectValues(mode));
		return JSON.stringify(simplyfied);
	}

}
