import { Provide } from "@midwayjs/core";
import { InjectEntityModel } from "@midwayjs/typeorm";
import { Repository } from "typeorm";
import { Article } from "../entity/article.entity";

@Provide()
export class ArticleService {
    @InjectEntityModel(Article)
    articleModel: Repository<Article>;

    async createArticle(title: string, content: string): Promise<Article> {
        const newArticle = new Article();
        newArticle.title = title;
        newArticle.content = content;
        return this.articleModel.save(newArticle);
    }

    async getArticleById(id: number): Promise<Article | undefined> {
        return this.articleModel.findOne({ where: { id } });
    }

    async getArticleByTitle(title: string): Promise<Article | undefined> {
        return this.articleModel.findOne({ where: { title } });
    }

    async getArticleTitles(): Promise<string[]> {
        const articles = await this.articleModel.find();
        return articles.map(article => article.title);
    }

    async deleteArticle(articleId: number): Promise<void> {
        await this.articleModel.delete(articleId);
    }
}