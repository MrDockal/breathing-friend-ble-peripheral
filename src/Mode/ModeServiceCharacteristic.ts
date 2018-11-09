import * as bleno from 'bleno';
import { objectValues } from '../core/objectValues';

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
		})
	}

	public onReadRequest(offset: number, callback: (result: number, data?: Buffer) => void) {
		const modes: BreathingDefinition[] = [{
			uid: '271',
			speed: 0,
			cycleSpeedStart: 2,
			cycleSpeedEnd: 2,
			duration: 2,
			freqIn: 2,
			freqHold1: 2,
			freqOut: 2,
			freqHold2: 2,
		}, {
			uid: '272',
			speed: 0,
			cycleSpeedStart: 3,
			cycleSpeedEnd: 3,
			duration: 3,
			freqIn: 3,
			freqHold1: 3,
			freqOut: 3,
			freqHold2: 3,
		}, {
			uid: '273',
			speed: 0,
			cycleSpeedStart: 4,
			cycleSpeedEnd: 4,
			duration: 4,
			freqIn: 4,
			freqHold1: 4,
			freqOut: 4,
			freqHold2: 4,
		}];
		const stringified = this.encodeModesForBluetoothBuffer(modes);
		const buf = Buffer.from(stringified.slice(offset), 'utf8');
		callback(this.RESULT_SUCCESS, buf);
	}

	public onWriteRequest(
		data: Buffer,
        offset: number,
        withoutResponse: boolean,
        callback: (result: number) => void
	) {
		if (offset) {
			console.log('this.RESULT_ATTR_NOT_LONG')
			callback(this.RESULT_ATTR_NOT_LONG);
		} else {
			const modeDefinitions = data.readUInt8(0);
			console.log(modeDefinitions);
			switch (modeDefinitions) {
				case 0:
				case 1:
				case 2:
					if (!withoutResponse) {
						callback(this.RESULT_SUCCESS);
					}
				break;
				default:
				if (!withoutResponse) {
					callback(this.RESULT_UNLIKELY_ERROR);
				}
			}
		}
	}

	private encodeModesForBluetoothBuffer(modes: BreathingDefinition[]) {
		const simplyfied = modes.map((mode: BreathingDefinition) => objectValues(mode));
		return JSON.stringify(simplyfied);
	}

}
