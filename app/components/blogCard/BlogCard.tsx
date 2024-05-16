import React from 'react'
import { BlogPost } from '../../types/blog'
import Image from 'next/image'

type Props = {
    post: BlogPost
}

export const BlogCard = (props: Props) => {
    return (
        <article key={props.post.id} className="flex flex-col items-start justify-between">
            <div className="relative w-full">
                <img
                    src={props.post.imageUrl}
                    alt={props.post.author.name}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-200/10" />
            </div>
            <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={props.post.datetime} className="text-gray-400">
                        {props.post.date}
                    </time>
                    <a
                        href={props.post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                        {props.post.category.title}
                    </a>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-400">
                        <a href={props.post.href}>
                            <span className="absolute inset-0" />
                            {props.post.title}
                        </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">{props.post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={props.post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-100">
                            <a href={props.post.author.href}>
                                <span className="absolute inset-0" />
                                {props.post.author.name}
                            </a>
                        </p>
                        <p className="text-gray-400">{props.post.author.role}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}