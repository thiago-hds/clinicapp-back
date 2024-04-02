export function removeNonNumberCharacters(value: string): string {
	return value.replace(/\D/g, '');
}
