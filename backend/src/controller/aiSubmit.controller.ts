import { Controller, Post, Inject} from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';

@Controller('/aiSumbit')
export class addTaskController {
  @Inject()
  ctx: Context;
  @Inject()
  userService: UserService;
  
  @Post('/')
  async aiSubmit(): Promise<any> {
    const userData = this.ctx.request.body;
    const { content } = userData as {
        content: string
    };
    content
    // AI逻辑



    const response = {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        message: '内容',
      },
    };
    return response;
  }
}