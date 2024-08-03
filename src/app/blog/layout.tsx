import BlogLayout from '../../components/BlogLayout';

const Layout = ({ children }: { children: React.ReactNode }) => (
	<BlogLayout>{children}</BlogLayout>
);

Layout.displayName = 'Layout';
export default Layout;
