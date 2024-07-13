import { LoginRequestDto } from '@util/dtos/auth/LoginRequestDto';
import { HttpResponseDto } from 'src/web/interfaces/HttpResponse';

export interface IAuthService {
	login(payload: LoginRequestDto): Promise<HttpResponseDto>;
}
