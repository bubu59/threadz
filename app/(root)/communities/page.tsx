import CommunityCard from "@/components/cards/CommunityCard"
import { fetchCommunities } from "@/lib/actions/community.actions"
import { currentUser } from "@clerk/nextjs"

async function Page() {
    const user = await currentUser()

    if(!user) return null

    //Fetch users
    const result = await fetchCommunities({
        searchString: '',
        pageNumber: 1,
        pageSize: 25
    })

   
  return (
    <section>
        <h1 className="head-text mb-10">Search</h1>

        {/* Search bar */}
        <div className="mt-14 flex flex-col gap-9">
            {result.communities.length === 0 ? (
                <p className="no-result">No users</p>
            ) : (
                <>
                    {result.communities.map((community) => (
                        <CommunityCard
                            key={community.id}
                            id={community.id}
                            name={community.name}
                            username={community.username}
                            imgUrl={community.image}
                            bio={community.bio}
                            members={community.members}
                        />
                    ))}
                </>
            )}
        </div>
    </section>
  )
}

export default Page