import { Box, Breadcrumbs, Container, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import Link, { LinkProps } from '@mui/material/Link';
import { Link as RouterLink, useLocation, useParams } from 'react-router-dom';
import { routing } from '@/assets/siteData';

import SvgSpriteIcon from '../Common/SvgSpriteIcon';

const BreadcrumbsBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  width: '100%',
}));

const BreadcrumbsNav = styled(Breadcrumbs)({
  padding: '16px 0',
  textDecoration: 'none',
});

interface RoutingProps {
  title: string;
  href: string;
}

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const createBreadcrumbNameMap = (routing: RoutingProps[]) => {
  const breadcrumbsList: { [key: string]: string } = {};
  routing.map((route) => {
    breadcrumbsList[route.href] = route.title;
  });

  return breadcrumbsList;
};

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink} />;
}

function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isEventPage = pathnames[0] === 'events';

  const maxItemsBreadcrumbs = isSmallScreen ? 2 : 10;
  // for breadcrumbs title on single event page
  const { title } = useParams();

  return (
    <BreadcrumbsBox>
      <Container>
        <BreadcrumbsNav
          maxItems={isEventPage ? 10 : maxItemsBreadcrumbs}
          separator={<SvgSpriteIcon svgSpriteId="breadcrumbsSeparator_icon" />}
          aria-label="breadcrumb">
          <LinkRouter underline="hover" color="inherit" to="/">
            Головна
          </LinkRouter>

          {pathnames.map((_value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const breadcrumbNameMap = createBreadcrumbNameMap(routing);

            if (isEventPage && isSmallScreen) {
              return (
                breadcrumbNameMap[to] && (
                  <LinkRouter underline="hover" color="inherit" to={to} key={to}>
                    {breadcrumbNameMap[to]}
                  </LinkRouter>
                )
              );
            } else {
              return last ? (
                <Typography variant="breadcrumbs" sx={{ color: (theme) => theme.palette.common.black }} key={to}>
                  {breadcrumbNameMap[to] || title}
                </Typography>
              ) : (
                <LinkRouter underline="hover" color="inherit" to={to} key={to}>
                  {breadcrumbNameMap[to]}
                </LinkRouter>
              );
            }
          })}
        </BreadcrumbsNav>
      </Container>
    </BreadcrumbsBox>
  );
}

export default Page;
