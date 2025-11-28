import { type FC} from 'react';

import {Cell, List, Section} from '@telegram-apps/telegram-ui';

import { Page } from '@/components/Page.tsx';

export const AllAlbumsPage: FC = () => {
  return (
    <Page back={true}>
      <List>
       <Section
           header="all albums for sure">
           <Cell>
               album 1
           </Cell>
           <Cell>
               album 2
           </Cell>
       </Section>
      </List>
    </Page>
  );
};
