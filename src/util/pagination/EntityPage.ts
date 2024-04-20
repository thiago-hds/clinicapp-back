export class EntityPage<T> {
	public totalCount: number = 0;
	public items: T[] = [];

	constructor(items: T[], totalCount: number) {
		this.items = items;
		this.totalCount = totalCount;
	}
}
