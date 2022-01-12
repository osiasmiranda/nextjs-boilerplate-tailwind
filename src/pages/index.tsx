import tw from 'twin.macro'
import { css } from '@emotion/react'

export default function Home() {
  return (
    <div css={styles.root}>
      <h1>Hello World - Osias Gualberto Miranda evnena
      </h1>
    </div>
  )
}

const styles = {
  root: css`
  background: green;
  ${tw`flex items-center justify-center width[100vw] height[100vh]`},
  h1{${tw`sm:(text-3xl color[blue]) md:(text-6xl color[black]) hover:(text-white)`},
  `,
}
