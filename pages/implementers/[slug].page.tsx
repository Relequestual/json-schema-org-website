import React from 'react'
import Head from 'next/head'
import StyledMarkdown from '~/components/StyledMarkdown'
import { getLayout } from '~/components/Sidebar'
import getStaticMarkdownPaths from '~/lib/getStaticMarkdownPaths'
import getStaticMarkdownProps from '~/lib/getStaticMarkdownProps'
import { Headline1 } from '~/components/Headlines'
import { SectionContext } from '~/context'
import { DocsHelp } from '~/components/DocsHelp'

export async function getStaticPaths() { return getStaticMarkdownPaths('pages/implementers') }
export async function getStaticProps(args: any) { return getStaticMarkdownProps(args, 'pages/implementers') }

export default function StaticMarkdownPage ({ frontmatter, content }: { frontmatter: any, content: any }) {
  return (
    <SectionContext.Provider value={frontmatter.section || null}>
      <Head>
        <title>JSON Schema - {frontmatter.title}</title>
      </Head>
      <Headline1>{frontmatter.title}</Headline1>
      <StyledMarkdown markdown={content} />
      <DocsHelp />
    </SectionContext.Provider>
  )
}
StaticMarkdownPage.getLayout = getLayout