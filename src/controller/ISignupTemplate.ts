import { Request, Response } from "express";

export class ISignupTemplate {
    constructor() {
    }

    get(request: Request, response: Response) {
        response.render('public/interfaces/signup.twig');
    }

    post(request: Request, response: Response) {
        // handle signup logic here
    }
}
