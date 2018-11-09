import * as bleno from 'bleno';
import { DeviceService } from './Device/DeviceService';
import { ModeService } from './Mode/ModeService';

const deviceService = new DeviceService();
const modeService = new ModeService();

bleno.on('stateChange', (state: any) => {
    console.log('state', state);
    if (state === 'poweredOn') {
      bleno.startAdvertising('Breathing friend', [deviceService.uuid, modeService.uuid]);
    } else {
      bleno.stopAdvertising();
    }
});

bleno.on('advertisingStart', (error?: Error) => {
    console.log('on -> advertisingStart: ' + (error ? 'error ' + error : 'success'));

    if (!error) {
      bleno.setServices([deviceService, modeService], function(error2?: Error){
        console.log('setServices: '  + (error2 ? 'error ' + error2 : 'success'));
      });
    }
});
