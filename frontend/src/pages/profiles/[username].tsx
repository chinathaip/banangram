import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon, UserRoundPlusIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function UserProfilePage() {
	const router = useRouter();
	const username = router.query.username;

	return (
		<div className="container grid grid-cols-12">
			{/* Left profile aside */}
			{/* NOTE: I have no idea why top-16 is required here, but it offsets perfectly with the padding.*/}
			{/* top-14 also offsets it perfectly, minus the padding so its top is directly flat against the header */}
			<aside className="col-span-12 h-min md:sticky md:top-16 md:col-span-4 lg:col-span-3">
				<section aria-labelledby="profile-header">
					<div className="flex flex-col">
						<div className="relative h-24 bg-secondary">
							<Image
								className="select-none"
								src="https://pbs.twimg.com/profile_banners/1504109916461539336/1685621542/1500x500"
								fill
								objectFit="cover"
								alt="banananaynay's profile cover picture"
							/>
						</div>
						<div className="relative flex flex-col">
							<div className="h-12">
								<Avatar className="ml-2 h-24 w-24 -translate-y-1/2 border-2 border-background">
									<AvatarImage
										className="select-none"
										src="https://github.com/NayHtetKyaw.png"
										alt="@bananayhtet's profile picture"
									/>
									<AvatarFallback>NT</AvatarFallback>
								</Avatar>
							</div>
							<div className="mt-2 flex flex-row items-center">
								<div>
									<div className="text-lg font-semibold">NayHtetKyaw</div>
									<div className="text-muted-foreground">@bananayhtet</div>
								</div>
								<div className="ml-auto">
									<Button>
										<UserRoundPlusIcon className="h-6 w-6" />
										Follow
									</Button>

									{/* <button className="btn btn-secondary">Message</button> */}
									{/* <button className="btn btn-secondary">Edit Profile</button> */}
									{/* <button className="btn btn-secondary">More</button> */}
								</div>
							</div>
						</div>
					</div>
				</section>

				<section aria-labelledby="profile-details" className="mt-4">
					{/* The unequal margins here are intentional, mathematically, not correct (probably??) but optical correction "corrects" it */}
					{/* Atleast that's what it looks like to me */}
					<Separator className="my-3 mb-2" />
					<div className="mt-1">
						XDDD Bananas! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, rerum. Iste eius
						illum commodi atque excepturi voluptatum facere quasi libero. Nobis iste, eum corporis quo error
						quae quam laboriosam? Amet praesentium, sed libero quibusdam numquam fuga ut qui reprehenderit
						voluptatem?
					</div>

					<div className="mt-4 flex flex-row items-center text-sm text-muted-foreground">
						<CalendarIcon className="h-6 w-6" />
						<time dateTime="2021-02">
							<span className="select-none">&nbsp;</span>Joined February 2021
						</time>
					</div>

					<div className="mt-1 flex">
						<div className="mr-4">
							<span className="font-semibold">18</span>{" "}
							<span className="text-muted-foreground">Following</span>
						</div>
						<div>
							<span className="font-semibold">20</span>{" "}
							<span className="text-muted-foreground">Followers</span>
						</div>
					</div>
				</section>
			</aside>

			<section className="col-span-12 md:col-span-8 md:pl-2 lg:col-span-9" aria-labelledby="user-posts">
				<div className="h-screen">User's posts, filter</div>
				<div className="h-screen">User's posts, filter</div>
				{/* User's posts will be rendered here */}
			</section>
		</div>
	);
}
