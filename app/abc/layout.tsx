import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className={"bg-red-300"}>{children}</section>
}