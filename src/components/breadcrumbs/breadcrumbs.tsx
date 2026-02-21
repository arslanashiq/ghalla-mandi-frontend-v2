import { Breadcrumbs, Typography } from '@mui/material';

import useBreadCrumbs from 'src/hooks/useBreadCrumbs';

function BreadcrumbsComponent() {
  const { breadCrumbs, handleBreadcrumbClick } = useBreadCrumbs();

  return (
    <Breadcrumbs separator="›" sx={{ mb: 1 }}>
      {breadCrumbs.map((crumb, index) => (
        <Typography
          className="text-capitalize cursor-pointer"
          key={index}
          variant="body2"
          onClick={() => handleBreadcrumbClick(crumb)}
        >
          {crumb.name}
        </Typography>
      ))}
    </Breadcrumbs>
  );
}

export default BreadcrumbsComponent;
