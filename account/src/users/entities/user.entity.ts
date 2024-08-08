import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({
    name: 'users'
})

export class UserEntity {
    @PrimaryGeneratedColumn('uuid', {
        comment: 'Идентификатор пользователя',
        name: 'userid'
    })
    readonly userId: string

    @Column('varchar', {
        comment: 'Номер телефона пользователя',
        nullable: false,
        length: 20,
        name: 'phone'
    })
    phone: string

    @Column('varchar', {
        comment: 'Электронная почта пользователя',
        nullable: false,
        length: 20,
        name: 'email'
    })
    email: string

    @Column('varchar', {
        comment: 'Логин пользователя',
        nullable: false,
        length: 20,
        name: 'login'
    })
    login: string

    @Column('varchar', {
        comment: 'Имя пользователя',
        name: 'firstname'
    })
    firstName: string

    @Column('varchar', {
        comment: 'Фамилия',
        name: 'lastname'
    })
    lastName: string

    @Column('varchar', {
        comment: 'Хеш пароля',
        name: 'passwordhash'
    })
    passwordHash: string

    @Column('varchar', {
        comment: 'Соль пароля',
        name: 'passwordsalt'
    })
    passwordSalt: string
}
