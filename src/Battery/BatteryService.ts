import * as bleno from 'bleno';
import { BatteryLevelCharacteristic } from './BatteryLevelCharacteristic';

export class BatteryService extends bleno.PrimaryService {
	public constructor() {
		super({
			uuid: '180F',
			characteristics: [
				new BatteryLevelCharacteristic(),
			]
		})
	}
}
