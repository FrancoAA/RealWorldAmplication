import { PrismaService } from "nestjs-prisma";
import { Prisma, Article, Comment, Tag, User } from "@prisma/client";

export class ArticleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ArticleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArticleFindManyArgs>
  ): Promise<number> {
    return this.prisma.article.count(args);
  }

  async findMany<T extends Prisma.ArticleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArticleFindManyArgs>
  ): Promise<Article[]> {
    return this.prisma.article.findMany(args);
  }
  async findOne<T extends Prisma.ArticleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArticleFindUniqueArgs>
  ): Promise<Article | null> {
    return this.prisma.article.findUnique(args);
  }
  async create<T extends Prisma.ArticleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArticleCreateArgs>
  ): Promise<Article> {
    return this.prisma.article.create<T>(args);
  }
  async update<T extends Prisma.ArticleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArticleUpdateArgs>
  ): Promise<Article> {
    return this.prisma.article.update<T>(args);
  }
  async delete<T extends Prisma.ArticleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ArticleDeleteArgs>
  ): Promise<Article> {
    return this.prisma.article.delete(args);
  }

  async findComments(
    parentId: string,
    args: Prisma.CommentFindManyArgs
  ): Promise<Comment[]> {
    return this.prisma.article
      .findUnique({
        where: { id: parentId },
      })
      .comments(args);
  }

  async findTagList(
    parentId: string,
    args: Prisma.TagFindManyArgs
  ): Promise<Tag[]> {
    return this.prisma.article
      .findUnique({
        where: { id: parentId },
      })
      .tagList(args);
  }

  async getAuthor(parentId: string): Promise<User | null> {
    return this.prisma.article
      .findUnique({
        where: { id: parentId },
      })
      .author();
  }
}
