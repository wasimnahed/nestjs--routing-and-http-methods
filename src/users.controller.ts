//Routing And Controller


// import { Controller, Get,Post,Put,Delete,Patch,Req,HttpCode } from "@nestjs/common";
// import { of } from "rxjs";
// import { Request } from "express";

// @Controller("/users")
// export class UsersController{
    
//     @Post("/profile")
//     @HttpCode(200)
//     getProfile(@Req() req:Request){
//     //  return 'wasim nahed'
//         return of({
//           hello:'world',        //json formet a data
//         });
//     }
// }


//  Route parameter ,query parameter, request header

// import { Controller, Get, Param } from "@nestjs/common";

// @Controller('/users')
// export class UsersController{
// @Get('/videos/:id')
// getVideo(@Param() params: Record<string, any>){
//     console.log(params);
//     return 'success';
// }
// }




// import { Controller, Get, Param } from "@nestjs/common";

// @Controller('/users')
// export class UsersController{
// @Get('/videos/:id')
// getVideo(@Param('id') param: number){
//     console.log(param);
//     return 'success';
// }
// }

// import { Controller, Get, Param } from "@nestjs/common";

// @Controller('/users')
// export class UsersController{
// @Get('/videos/:id/:name')
// getVideo(@Param('name') param: number){
//     console.log(param);
//     return 'success';
// }
// }


// import { Controller, Get, Param } from "@nestjs/common";

// interface VideoParams{
//     id:number;
//     name:string;
// }


// @Controller('/users')
// export class UsersController{
// @Get('/videos/:id/:name')
// getVideo(@Param() params: VideoParams ){
//     console.log(params.id);
//     return 'success';
// }
// }



// import { Controller, Get, Param, Query } from "@nestjs/common";

// interface VideoParams{
//     id:number;
//     name:string;
// }

// @Controller('/users')
// export class UsersController{
// @Get('/videos')
// getVideo(@Query() query: Record<string, any>  ){
//     console.log(query);
//     return 'success';
// }
// }



// import { Body, Controller, Post } from "@nestjs/common";
// @Controller('/users')
// export class UsersController{
// @Post('/video')
// addVideo(@Body() requestData: Record<string,any>){
//     console.log(requestData);
//     return {success:true};
// }
// }


import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { createUserDTO } from "./dto/create-user.dto";

let USERS = [];

@Controller('/users')
export class UsersController{

@Post()
addUser(@Body() createUserDto: createUserDTO){
 USERS.push(createUserDto);
 return 'user added';
}

@Get()            //ata sob user k dakar jonno
getUsers(){
return USERS;
}

@Get(':id')    //ata specfic user k dakar jonno
getUser(@Param("id") id:number){
    return USERS.find((user)=>+user.id===+id);
}

 @Patch(':id')    //data update korar jonno
 updateUser(@Param('id') id:number, @Body() updateUserDTO:createUserDTO) {
 const userIdx = USERS.findIndex((user) => +user.id === +id);

    if(!userIdx){
      return ; 
    }
    
   USERS[userIdx] = updateUserDTO;
 }

 @Delete(':id')    //ata update korar jonno
 deleteUser(@Param("id") id:number){
 USERS = USERS.filter((user)=>+user.id !== +id);
 }
}












