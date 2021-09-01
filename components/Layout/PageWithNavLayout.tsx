import React from 'react';
import PageNavigation from '../Nav/PageNavigation';
import TitleLabel from '../Label/TitleLabel';
import Layout from '.';
import { NavDataType } from '../../utils/data';
import { PageWithNavContainer } from './styles';

type PageWithNavLayoutPropsType = {
  children: React.ReactNode;
  navData: NavDataType;
  pageName: string;
  pageDesc: string;
};
export default function PageWithNavLayout({
  pageName = '',
  pageDesc = '',
  navData,
  children,
}: PageWithNavLayoutPropsType): JSX.Element {
  return (
    <Layout>
      <PageWithNavContainer>
        <div className="title">
          <TitleLabel title={pageName} desc={pageDesc} />
        </div>
        <PageNavigation data={navData} />
        {children}
      </PageWithNavContainer>
    </Layout>
  );
}
