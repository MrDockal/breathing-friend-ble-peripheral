export const objectValues = (obj: any) => {
	return Object.keys(obj).map((key: string) => obj[key]);
}
