import * as fakerStatic from 'faker';

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
};

export const modes: BreathingDefinition[] = [{
	uid: 'abc01',
	speed: 0,
	cycleSpeedStart: 2,
	cycleSpeedEnd: 2,
	duration: 2,
	freqIn: 2,
	freqHold1: 2,
	freqOut: 2,
	freqHold2: 2,
}, {
	uid: 'abc02',
	speed: 0,
	cycleSpeedStart: 3,
	cycleSpeedEnd: 3,
	duration: 3,
	freqIn: 3,
	freqHold1: 3,
	freqOut: 3,
	freqHold2: 3,
}, {
	uid: 'abc03',
	speed: 0,
	cycleSpeedStart: 4,
	cycleSpeedEnd: 4,
	duration: 4,
	freqIn: 4,
	freqHold1: 4,
	freqOut: 4,
	freqHold2: 4,
}];

export interface Stat {
	modeUid: string;
	timestampStart: number;
	timestampEnd: number;
};

export const stats: Stat[] = [{
	modeUid: 'abc01',
	timestampStart: fakerStatic.date.past().getTime(),
	timestampEnd: fakerStatic.date.past().getTime(),
}, {
	modeUid: 'abc01',
	timestampStart: fakerStatic.date.past().getTime(),
	timestampEnd: fakerStatic.date.past().getTime(),
}, {
	modeUid: 'abc01',
	timestampStart: fakerStatic.date.past().getTime(),
	timestampEnd: fakerStatic.date.past().getTime(),
}, {
	modeUid: 'abc01',
	timestampStart: fakerStatic.date.past().getTime(),
	timestampEnd: fakerStatic.date.past().getTime(),
}, {
	modeUid: 'abc01',
	timestampStart: fakerStatic.date.past().getTime(),
	timestampEnd: fakerStatic.date.past().getTime(),
}, {
	modeUid: 'abc02',
	timestampStart: fakerStatic.date.past().getTime(),
	timestampEnd: fakerStatic.date.past().getTime(),
}, {
	modeUid: 'abc02',
	timestampStart: fakerStatic.date.past().getTime(),
	timestampEnd: fakerStatic.date.past().getTime(),
}, {
	modeUid: 'abc02',
	timestampStart: fakerStatic.date.past().getTime(),
	timestampEnd: fakerStatic.date.past().getTime(),
}, {
	modeUid: 'abc02',
	timestampStart: fakerStatic.date.past().getTime(),
	timestampEnd: fakerStatic.date.past().getTime(),
}, {
	modeUid: 'abc02',
	timestampStart: fakerStatic.date.past().getTime(),
	timestampEnd: fakerStatic.date.past().getTime(),
}, {
	modeUid: 'abc03',
	timestampStart: fakerStatic.date.past().getTime(),
	timestampEnd: fakerStatic.date.past().getTime(),
}, {
	modeUid: 'abc03',
	timestampStart: fakerStatic.date.past().getTime(),
	timestampEnd: fakerStatic.date.past().getTime(),
}];
