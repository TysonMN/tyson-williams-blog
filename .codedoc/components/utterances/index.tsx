import { ThemedComponentThis } from '@connectv/jss-theme';
import { RendererLike } from '@connectv/html';

import { UtterancesStyle } from './style';


export interface UtterancesOptions {
  theme: string;
}


export function Utterances(
  this: ThemedComponentThis,
  options: UtterancesOptions,
  renderer: RendererLike<any, any>,
) {
  const classes = this.theme.classes(UtterancesStyle);
  let theme = 'github-light';
  if (options && options.theme && options.theme !== '') theme = options.theme;
  const attributes = {
    'repo': 'bender2k14/tyson-williams-blog',
    'issue-term': 'pathname',
    'label': '💬comments',
    'theme': theme,
    'crossorigin': 'anonymous'
  }
  return <div class={`${classes.utterancesTransparentIframe}`}>
           <script src='https://utteranc.es/client.js'
                   {...attributes}
                   async />
         </div>
}