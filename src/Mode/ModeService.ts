import * as bleno from 'bleno';
import { ModeServiceCharacteristic } from './ModeServiceCharacteristic';

export class ModeService extends bleno.PrimaryService {
	public constructor() {
		super({
			uuid: '9920',
			characteristics: [
				new ModeServiceCharacteristic(),
			]
		})
	}
}
