import React from 'react'

type Props = {
    children: React.ReactNode
}

export const PageLayout = (props: Props) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {props.children}
    </div>
  )
}