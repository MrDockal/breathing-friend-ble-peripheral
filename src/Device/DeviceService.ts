import * as bleno from 'bleno';
import { DeviceVersionCharacteristics } from './DeviceVersionCharacteristic';

export class DeviceService extends bleno.PrimaryService {
	public constructor() {
		super({
			uuid: '9910',
			characteristics: [
				new DeviceVersionCharacteristics(),
			]
		})
	}
}
