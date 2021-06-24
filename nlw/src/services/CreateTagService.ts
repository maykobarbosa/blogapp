import {getCustomRepository } from "typeorm";
import { TagsReposities } from "../repositories/TagsRepositories"


class CreateTagService {

    async execute(name: string ){
        const tagRepository =  getCustomRepository (TagsReposities);

        if(!name){
            throw new Error("Nome incorreto!");
        }
        /// SELECT * FROM TAGS WHERE NAME = 'NAME';
        const TagAlreadyExists = await tagRepository.findOne({
            name
        });

        if(TagAlreadyExists) {
            throw new Error("Essa tag já existe!");
        }

        const Tag = tagRepository.create({
            name
        });

        await tagRepository.save(Tag);

        return Tag;
    }

}

export { CreateTagService }