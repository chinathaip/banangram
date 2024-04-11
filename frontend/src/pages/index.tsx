import PostCard from "@/components/ui/post-card";

export default function Home() {
	return (
		<div className="container mx-auto grid grid-cols-12">
			<div className="relative hidden md:col-span-3 md:block">
				{/* TODO: add new post here, and in the header when going below the md breakpoint */}
				This space is for stuff like "New Post" on Desktops. Will be sticky.
			</div>
			{/* TODO: don't forget to remove h-screen, make this scrollable since it's the main content */}
			<div className="relative col-span-12 h-screen md:col-span-9">
				<PostCard />
				{/* <PostCardSkeleton /> */}
			</div>
		</div>
	);
}
