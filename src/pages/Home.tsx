import { useEffect, useState } from "react"
import ResponsiveAppBar from "../components/ResponsiveAppBar/ResponsiveAppBar"
import CardPost from "../components/CardPost"

export default function Home() {

    const [posts, setPosts] = useState([])

    async function carregarPosts() {
        const response = await fetch('https://api-reddit.devlucas.online/posts/findAll')
        const responseJson = await response.json()
        console.log(responseJson)
        setPosts(responseJson)

    }

    useEffect(() => {
        carregarPosts()
    }, [])

    return (
        <div className="flex flex-col w-screen h-screen">
            <ResponsiveAppBar />

            <div className="flex bg-slate-50 w-full h-full justify-center">

                <section id="posts" className="py-3 px-4 h-full w-full"
                style={{
                    maxWidth: '1024px'
                }}
                >
                    {
                        posts && posts.map((post: any) => {
                            return <CardPost post={post} />
                        })
                    }
                </section>

            </div>


        </div>
    )
}
