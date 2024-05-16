import React from 'react'
import { BlogCard } from '../../components';
import { FAKE_POSTS } from '../../libs/constants';

type Props = {}

function BlogsPage(props: Props) {
    return (
        <div className="bg-primary py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">List of simple blog posts</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-400">
                        You like the content? Here are some more articles that you might like.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {FAKE_POSTS.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogsPage;