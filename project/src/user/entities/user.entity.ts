import { ApiProperty } from '@nestjs/swagger';

export class UserEntity {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    role: string;

    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial);
    }
}
