import * as bleno from 'bleno';
import { BatteryService } from './Battery/BatteryService';
import { DeviceService } from './Device/DeviceService';
import { ModeService } from './Mode/ModeService';
import { StatService } from './Stats/StatsService';
import { CurrentTimeService } from './Time/CurrentTimeService';

const batteryService = new BatteryService();
const deviceService = new DeviceService();
const modeService = new ModeService();
const statsServices = new StatService();
const currentTimeService = new CurrentTimeService();

bleno.on('stateChange', (state: any) => {
    console.log('state', state);
    if (state === 'poweredOn') {
      bleno.startAdvertising('Breathing friend', [batteryService.uuid, deviceService.uuid, modeService.uuid, statsServices.uuid, currentTimeService.uuid]);
    } else {
      bleno.stopAdvertising();
    }
});

bleno.on('advertisingStart', (error?: Error) => {
    console.log('on -> advertisingStart: ' + (error ? 'error ' + error : 'success'));

    if (!error) {
      bleno.setServices([batteryService, deviceService, modeService, statsServices, currentTimeService], function(error2?: Error){
        console.log('setServices: '  + (error2 ? 'error ' + error2 : 'success'));
      });
    }
});
