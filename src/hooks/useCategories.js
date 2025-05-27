import useSWR from "swr";

/**
 *
 * @param {{
 *      title: string?,
 *      type: "Blog" | "Event" ,
 *      parent: string?,
 *      pagination: {
 *          current: number,
 *          pageSize: number
 *      }
 * }}
 */
export function useCategories({ title, type, parent, pagination }) {
  const { data, isLoading, error } = useSWR({
    url: "Category/GetForSelect",
    method: "GET",
    params: {
      Title: title,
      Type: type,
      ParentKey: parent,
      PageIndex: pagination.current,
      PageSize: pagination.pageSize,
    },
  });

  return {
    isLoading,
    error,
    total: data?.totalCount || 0,
    data: (data?.categories?.items || []).map((item) => ({
      key: item.key,
      title: item.title,
      icon: item.icon,
    })),
  };
}
