import { PrismaService } from "nestjs-prisma";
import { Prisma, Comment, Article } from "@prisma/client";

export class CommentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CommentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommentFindManyArgs>
  ): Promise<number> {
    return this.prisma.comment.count(args);
  }

  async findMany<T extends Prisma.CommentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommentFindManyArgs>
  ): Promise<Comment[]> {
    return this.prisma.comment.findMany(args);
  }
  async findOne<T extends Prisma.CommentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommentFindUniqueArgs>
  ): Promise<Comment | null> {
    return this.prisma.comment.findUnique(args);
  }
  async create<T extends Prisma.CommentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommentCreateArgs>
  ): Promise<Comment> {
    return this.prisma.comment.create<T>(args);
  }
  async update<T extends Prisma.CommentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommentUpdateArgs>
  ): Promise<Comment> {
    return this.prisma.comment.update<T>(args);
  }
  async delete<T extends Prisma.CommentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommentDeleteArgs>
  ): Promise<Comment> {
    return this.prisma.comment.delete(args);
  }

  async getArticle(parentId: string): Promise<Article | null> {
    return this.prisma.comment
      .findUnique({
        where: { id: parentId },
      })
      .article();
  }
}
