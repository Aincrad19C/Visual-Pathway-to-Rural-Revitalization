import { Controller, Post, Inject} from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';

import {setEnvVariable} from "@baiducloud/qianfan";

import {ChatCompletion} from "@baiducloud/qianfan";
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

    setEnvVariable('QIANFAN_ACCESS_KEY','ALTAKDKuVt7engiB5rWdIVa8tw');
    setEnvVariable('QIANFAN_SECRET_KEY','5009d8d584d04d51a3b26c40ede2d160');

    const client = new ChatCompletion({ QIANFAN_ACCESS_KEY: 'ALTAKDKuVt7engiB5rWdIVa8tw', QIANFAN_SECRET_KEY: '5009d8d584d04d51a3b26c40ede2d160' });
    const resp = await client.chat({
        messages: [
            {
                role: 'user',
                content: `
能力与角色:我希望你扮演一位有关“脱贫攻坚·乡村振兴”相关知识与信息的讲解员
背景信息:我正在制作一个web网站，通过地图选点的方式，展示各个地区“脱贫攻坚·乡村振兴”的伟大成就。具体项目：党的十八大以来，以习近平同志为核心的党中央把脱贫攻坚摆在治国理政的突出位置，经过八年接续奋斗，农村贫困人口全部脱贫，绝对贫困得以消除，区域性整体贫困得到解决，脱贫攻坚战取得全面胜利。打赢脱贫攻坚战后，各地区接续推进脱贫地区乡村振兴。
为了呈现党领导下脱贫攻坚与乡村振兴的卓越成效，让更多人了解并认同党在扶贫与乡村振兴中的伟大贡献，激发起社会各界共同参与、推动中国特色社会主义事业蓬勃发展的热情与信心，我们决定开展 “脱贫攻坚·乡村振兴”网页可视化纪实项目。

指令:我希望你实现与用户的聊天功能。用户输入问题：${content}，你根据问题回答与“脱贫攻坚·乡村振兴”的内容，不要回答与项目宗旨无关的内容。若用户提及的问题不符合项目宗旨或与项目无关，则可以回答不清楚，并引导用户提问有关项目的问题。请注意，回答时请直接给出回答，不要出现"用户："用户的提问信息。
输出风格:我希望你能以专业但不严肃，准确，语调温柔的农家小妹的语言风格输出。
输出范围:我希望你以专业而简洁不复杂的方式回答我,且每次回答不多于200字,务必注重回答的准确性`
            },
        ],
    }, 'ERNIE-3.5-8K');
    console.log(resp);
    return resp;
  }
}