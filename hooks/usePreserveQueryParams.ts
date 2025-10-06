import { useRouter } from 'next/router';
import { useCallback } from 'react';

// Page-specific parameters that should not be carried across different pages
const PAGE_SPECIFIC_PARAMS = ['page', 'sort', 'filter', 'search', 'tab'];

export const usePreserveQueryParams = () => {
  const router = useRouter();

  // Function to clean page-specific params when navigating to a different page
  const cleanQueryParams = useCallback((currentPath: string, targetPath: string, params: Record<string, any>) => {
    // Extract the base path without query params
    const currentBasePath = currentPath.split('?')[0];
    const targetBasePath = targetPath.split('?')[0];
    
    // If navigating to a different page, remove page-specific params
    if (currentBasePath !== targetBasePath) {
      const cleanedParams = { ...params };
      PAGE_SPECIFIC_PARAMS.forEach(param => {
        delete cleanedParams[param];
      });
      return cleanedParams;
    }
    
    return params;
  }, []);

  // Function to merge current query params with new ones
  const mergeQueryParams = useCallback((targetPath: string, newParams: Record<string, any> = {}) => {
    const currentPath = router.asPath;
    const currentParams = { ...router.query };
    
    // Clean page-specific params if navigating to a different page
    const cleanedParams = cleanQueryParams(currentPath, targetPath, currentParams);
    
    return {
      ...cleanedParams,
      ...newParams,
    };
  }, [router.query, router.asPath, cleanQueryParams]);

  // Navigate with preserved query params
  const navigateWithQuery = useCallback((path: string, newParams: Record<string, any> = {}) => {
    const mergedParams = mergeQueryParams(path, newParams);
    const queryString = new URLSearchParams(
      Object.entries(mergedParams).reduce((acc, [key, value]) => {
        if (Array.isArray(value)) {
          value.forEach(v => acc.append(key, v));
        } else if (value !== undefined && value !== null) {
          acc.append(key, String(value));
        }
        return acc;
      }, new URLSearchParams())
    ).toString();

    const destination = queryString ? `${path}?${queryString}` : path;
    router.push(destination);
  }, [router, mergeQueryParams]);

  // Get link href with preserved query params
  const getLinkWithQuery = useCallback((path: string, newParams: Record<string, any> = {}) => {
    const mergedParams = mergeQueryParams(path, newParams);
    const queryString = new URLSearchParams(
      Object.entries(mergedParams).reduce((acc, [key, value]) => {
        if (Array.isArray(value)) {
          value.forEach(v => acc.append(key, v));
        } else if (value !== undefined && value !== null) {
          acc.append(key, String(value));
        }
        return acc;
      }, new URLSearchParams())
    ).toString();

    return queryString ? `${path}?${queryString}` : path;
  }, [mergeQueryParams]);

  return {
    navigateWithQuery,
    getLinkWithQuery,
    currentQuery: router.query,
  };
};