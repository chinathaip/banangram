import { Injectable } from "@nestjs/common";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { DatabaseService } from "../db/db.service";
import { QueryConfig } from "pg";
import { Comment } from "./entities/comment.entity";

@Injectable()
export class CommentService {
	constructor(private readonly db: DatabaseService) {}

	async create(userId: string, createCommentDto: CreateCommentDto): Promise<Comment> {
		const queries: QueryConfig[] = [
			{
				name: `New message for post ${createCommentDto.postId} from ${userId}`,
				text: `INSERT INTO public.comment (content, post_id, user_id, created_at) VALUES ($1, $2, $3, $4) RETURNING *`,
				values: [createCommentDto.content, createCommentDto.postId, userId, new Date()]
			}
		];
		const results = await this.db.transaction(queries);
		const comment = results[0].rows as Comment[];
		return comment[0];
	}

	async findFor(postId: number): Promise<Comment[]> {
		const results = await this.db.query<Comment[]>(`SELECT * FROM public.comment WHERE post_id = ${postId} ORDER BY created_at DESC`);
		return results;
	}

	update(id: number, updateCommentDto: UpdateCommentDto) {
		return `This action updates a #${id} comment`;
	}

	remove(id: number) {
		return `This action removes a #${id} comment`;
	}
}
