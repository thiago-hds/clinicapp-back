export type FieldValidationError = {
	field: string;
	codes: string[];
	messages: string[];
};

export interface HttpResponse {
	statusCode: number;
	success: boolean;
	data?: any;
	message?: string;
	errors?: FieldValidationError[];
}
