import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id:number

    @Column('numeric',{nullable:false})
    cell:string

    @Column('text',{nullable:true})
    email:string

    @Column('text',{select:false, nullable:false})
    password: string

    
    


}