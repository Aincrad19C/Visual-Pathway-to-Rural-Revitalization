import { Controller, Post, Inject} from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';

@Controller('/regionId')
export class addTaskController {
  @Inject()
  ctx: Context;
  @Inject()
  userService: UserService;
  
  @Post('/')
  async aiSubmit(): Promise<any> {
    const userData = this.ctx.request.body;
    const { id } = userData as {
        id: string
    };
    id

    
    const response = {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        content: '# 内容saffasd ',
      },
    };
    return response;
  }
}