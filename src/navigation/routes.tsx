import type { ComponentType, JSX } from 'react';

import { IndexPage } from '@/pages/IndexPage/IndexPage';
import {AllAlbumsPage} from "@/pages/AllAlbumsPage.tsx";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
    { path: '/', Component: IndexPage },
    { path: '/albums', Component: AllAlbumsPage, title: 'All albums' },
];
