import {EntityRepository, Repository} from "typeorm"
import { Tag } from "../entities/Tag"

@EntityRepository(Tag)
class TagsReposities extends Repository<Tag> {

}

export {TagsReposities}
