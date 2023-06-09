import { ILoginTemplate } from "./controller/ILoginTemplate"
import { ISignupTemplate } from "./controller/ISignupTemplate"
import { UserController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
{
    method: 'get',
    route: '/login',
    controller: ILoginTemplate,
    action: 'get'
},
{
    method: 'post',
    route: '/signup',
    controller: ISignupTemplate,
    action: 'get'
},
]