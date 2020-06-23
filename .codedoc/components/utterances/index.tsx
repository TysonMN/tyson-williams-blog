import { ThemedComponentThis } from '@connectv/jss-theme';  // @see [CONNECTIVE JSS Theme](https://github.com/CONNECT-platform/connective-jss-theme)
import { RendererLike } from '@connectv/html';              // @see [CONNECTIVE HTML](https://github.com/CONNECT-platform/connective-html)
import { CodedocTheme } from '@codedoc/core';               // --> Type helper for theme object

export interface UtterancesOptions {
  theme: string;
}


export function Utterances(
  this: ThemedComponentThis,
  options: UtterancesOptions,
  renderer: RendererLike<any, any>,
) {
  let theme = 'github-light';
  if (options && options.theme && options.theme !== '') theme = options.theme;
  const attributes = {
    'repo': 'bender2k14/tyson-williams-blog',
    'issue-term': 'pathname',
    'label': '💬comments',
    'theme': theme,
    'crossorigin': 'anonymous'
  }
  return <script src='https://utteranc.es/client.js'
                 {...attributes}
                 async />
}