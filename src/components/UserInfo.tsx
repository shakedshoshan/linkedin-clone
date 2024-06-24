import { currentUser } from "@clerk/nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SignedIn } from "@clerk/nextjs";


async function UserInfo(){
    const user = await currentUser()
    const firstName = user?.firstName
    const lastName = user?.lastName
    const imageUrl = user?.imageUrl
    
    return (
        <div className="flex flex-col justify-center items-center bg-white py-4 rounded-lg">
            <Avatar>
                {user?.id ?(<AvatarImage src={user?.imageUrl} />) : (<AvatarImage src={"https://github.com/shadcn.png"} />)}
                <AvatarFallback>
                    {firstName?.charAt(0)}
                    {lastName?.charAt(0)}
                </AvatarFallback>
            </Avatar>

            <SignedIn>
                <div className="text-center space-y-2">
                    <h2 className="text-xl font-bold">{firstName} {lastName}</h2>
                    <p className="text-xs">
                        @{firstName}
                        {lastName}-{user?.id?.slice(-4)}
                    </p>
                    

                </div>
            </SignedIn>
            <hr className="w-full border-gray-200 my-5"></hr>

            <div className="flex flex-row">
                <p>Posts</p>
                <p>0</p>
            </div>

            <div className="flex flex-row">
                <p>Comments</p>
                <p>0</p>
            </div>



        </div>
    )
}

export default UserInfo;