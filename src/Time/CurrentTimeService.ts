import * as bleno from 'bleno';
import { CurrentTimeCharacteristic } from './CurrentTimeCharacteristic';

export class CurrentTimeService extends bleno.PrimaryService {
	public constructor() {
		super({
			uuid: '1805',
			characteristics: [
				new CurrentTimeCharacteristic(),
			]
		})
	}
}
