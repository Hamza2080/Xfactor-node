import { Entity, CreateDateColumn, Column, BeforeInsert, UpdateDateColumn, ObjectIdColumn, ObjectID } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { IsEmail } from 'class-validator';

@Entity('user')
export class UserEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    modifyOn: Date;

    @Column({
        type: 'text',
        unique: true
    })
    username: string;

    @Column('text')
    password: string;

    @Column('text')
    country: string;

    @Column('text')
    contact: string;

    @IsEmail()
    email: string;


    // This hashPassword function is used to create hash and it run before new insertion
    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, Number(process.env.SALT));
    }

    toResposponseObject(showToken = true): {id, username, email, country, contact, token?} {
        const { id, username, token, email, country, contact } = this;
        
        const responseObject = { id, username, email, country, contact, };
        if (showToken){
            responseObject['token'] = token;
        }

        return responseObject;
    }

    async comparePassword(attempt: string) {
        return await bcrypt.compare(attempt, this.password);
    }

    // generate jsonweb-token
    private get token(){
        const { id, username } = this;
        return jwt.sign({ id, username }, process.env.SECRET, { expiresIn: '1d'});
    }
}