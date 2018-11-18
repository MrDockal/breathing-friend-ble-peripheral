import * as bleno from 'bleno';
import { StatsServiceCharacteristic } from './StatsServiceCharacteristic';

export class StatService extends bleno.PrimaryService {
	public constructor() {
		super({
			uuid: '9930',
			characteristics: [
				new StatsServiceCharacteristic(),
			]
		})
	}
}
