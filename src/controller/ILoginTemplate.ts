import {Request, Response} from "express";

export class ILoginTemplate {
    constructor() {
    }

    get(request: Request, response: Response) {
        response.render('public/interfaces/login.twig');
    }
    post () {
        
    }
}
