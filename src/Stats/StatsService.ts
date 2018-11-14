import * as bleno from 'bleno';
import { StatsServiceCharacteristict } from './StatsServiceCharacteristict';

export class StatService extends bleno.PrimaryService {
	public constructor() {
		super({
			uuid: '9930',
			characteristics: [
				new StatsServiceCharacteristict(),
			]
		})
	}
}
