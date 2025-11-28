import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';
import {Button, Cell, Image, List, Section} from "@telegram-apps/telegram-ui";
import { Link } from '@/components/Link/Link.tsx';
import "./IndexPage.css"

import testImg from '../../../assets/testImg.jpg';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
        <List>
            <Section
                header="Katrein Web Page"
            >
                <div className="index-page-img">
                    <Image
                        fallbackIcon={<span>:/</span>}
                        size={96}
                        src={testImg} alt="photo"
                    />
                </div>

                <Link to="/albums">
                    <Cell subtitle="List of all albums">All albums</Cell>
                </Link>
            </Section>
            <div className="index-page-btn">
                <Button
                    mode="filled"
                    size="s"
                >
                    Does nothing
                </Button>
            </div>

        </List>
    </Page>
  );
};
