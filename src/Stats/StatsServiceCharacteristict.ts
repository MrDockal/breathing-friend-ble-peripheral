import * as bleno from 'bleno';
import { Stat, stats } from '../core/storageMocks';

type SubscribeCallback = (data?: Buffer) => void;

export class StatsServiceCharacteristict extends bleno.Characteristic {

	private subscribeCallback: SubscribeCallback;
	private maxValueSize: number;
	private stats: Stat[];

	public constructor() {
		super({
			uuid: '9931',
			properties: ['write', 'notify', 'read'],
			descriptors: [
				new bleno.Descriptor({
					uuid: '9931D1',
					value: 'Write request activates subscribe listener',
				})
			]
		});
		this.initialize();
	}

	public onWriteRequest(
		_data: Buffer,
        _offset: number,
        _withoutResponse: boolean,
        callback: (result: number) => void
	) {
		this.stats.forEach((stat: Stat) => {
			const message = JSON.stringify([stat.modeUid, stat.timestampStart, stat.timestampEnd]) + "\0";
			let offset = 0;
			while (offset < message.length) {
				offset += this.maxValueSize; 
				const buf = Buffer.from(message.slice(offset - this.maxValueSize, offset), 'utf8');
				this.subscribeCallback(buf);
			}
		});
		callback(this.RESULT_SUCCESS);
	}

	public onSubscribe(maxValueSize: number, callback: SubscribeCallback) {
		this.subscribeCallback = callback;
		this.maxValueSize = maxValueSize;
	}

	public onUnsubscribe() {
		this.initialize();
	}

	private initialize() {
		this.subscribeCallback = () => false;
		this.maxValueSize = 0;
		this.stats = stats;
	}
}
