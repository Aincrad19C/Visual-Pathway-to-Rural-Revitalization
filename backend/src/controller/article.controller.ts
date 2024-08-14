import { Body, Controller, Get, Inject, Param, Post } from "@midwayjs/core";
import { ArticleService } from "../service/article.service";

@Controller('/api/article')
export class ArticleController {
    @Inject()
    articleService: ArticleService;

    @Get('/getTitles')
    async getAllTitles(): Promise<string[]> {
        return this.articleService.getArticleTitles();
    }

    @Post('/create')
    async createArticle(@Body() articleData: any) {
        try {
            const { title, content } = articleData;
            await this.articleService.createArticle(title, content);
            return { success: true, message: "新文章创建成功" };
        } catch (error) {
            return { success: false, message: "文章创建失败" };
        }
    }

    @Post('/getArticle/:articleId')
    async getArticleById(@Param('articleId') articleId: number) {
        try {
            const article = await this.articleService.getArticleById(articleId);
            return { succsee: true, title: article.title, content: article.content, message: "获取成功" };
        } catch (error) {
            return { succsee: false, title: null, content: null, message: "获取失败" };
        }
    }

    @Post('/getArticle')
    async getArticleByTitle(@Body() articleTitle: string) {
        try {
            const article = await this.articleService.getArticleByTitle(articleTitle);
            return { succsee: true, title: article.title, content: article.content, message: "获取成功" };
        } catch (error) {
            return { succsee: false, title: null, content: null, message: "获取失败" };
        }
    }

    @Post('/delete/:articleId')
    async deleteArticle(@Param('articleId') articleId: number): Promise<void> {
        await this.articleService.deleteArticle(articleId);
    }
}