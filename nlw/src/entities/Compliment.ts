import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("compliments") //nome da tabela no banco
class Compliments {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;
    
    @Column()
    user_receiver: string;

    @Column()
    tag_id: string;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;


    constructor(){
        if(!this.id){
            this.id = uuid(); 
        }
    }

}
export { Compliments };