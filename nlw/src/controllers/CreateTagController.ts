import {Request, Response} from "express"
import { CreateTagService } from "../services/CreateTagService";

class CreateTagController {
    async handle( request: Request, response: Response) {
       
            const {name} = request.body;

            const createTagService = new CreateTagService();

            const Tag = await createTagService.execute(name);

            return response.json(Tag); 
        
        
    }
}

export { CreateTagController }

/** 
 * server -> routes -> controller -> service (throw new Error)
 * 
 */