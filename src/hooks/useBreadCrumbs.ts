import React, { useCallback, useMemo } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function useBreadCrumbs() {

    const location=useLocation()
    const navigate = useNavigate();
    const {id}=useParams()
    const ids=[id]

    const breadCrumbs=useMemo(() => {
      const paths=location?.pathname?.split('/') || []

      const pathsObject=paths.map(((path,index)=>{
        if(index===0) return {name:'Dashboard',path:'/',icon:'solar:home-bold'}
        if(ids.includes(path)) return {name:'Detail',path:`/${paths.slice(1,index+1).join('/')}`,}
        return {name:path,path:`/${paths.slice(1,index+1).join('/')}`,}
      }))
      return pathsObject
    }, [location])





      const handleBreadcrumbClick = useCallback((item: any) => {
        navigate(item.path);
      }, []);
    

  return {  breadCrumbs,location,handleBreadcrumbClick}
}

export default useBreadCrumbs