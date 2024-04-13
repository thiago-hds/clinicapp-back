export type FieldValidationError = {
	field: string;
	codes: string[];
	messages: string[];
};

export class HttpResponseDto {
	statusCode: number;
	success: boolean;
	data?: any;
	message?: string;
	errors?: FieldValidationError[];
}
