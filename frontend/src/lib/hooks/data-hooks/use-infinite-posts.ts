import { graphql } from "@/gql";
import { useInfiniteQuery } from "@tanstack/react-query";
import request from "graphql-request";

const infinitePostsQuery = graphql(`
	query Posts($page: Int!, $userId: String, $categoryId: Int) {
		posts(page: $page, user_id: $userId, category_id: $categoryId) {
			pageInfo {
				hasNextPage
				hasPreviousPage
				startCursor
				endCursor
				totalEdges
			}
			edges {
				node {
					id
					content
					user_id
					category_id
					likes
					user_liked
					created_at
					updated_at
					user {
						id
						username
						email
						bio
						display_name
						profile_picture
						created_at
					}
					category {
						id
						name
					}
				}
			}
		}
	}
`);

export function useInfinitePosts({ userId, categoryId }: { userId?: string; categoryId?: number }) {
	return useInfiniteQuery({
		queryKey: ["infinite-posts"],
		queryFn: ({ pageParam }) => {
			return request("http://localhost:3001/_api/graphql", infinitePostsQuery, {
				page: pageParam,
				userId,
				categoryId
			});
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage, _, lastPageParam) =>
			lastPage.posts.pageInfo.hasNextPage ? lastPageParam + 1 : undefined
	});
}
