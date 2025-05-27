import { useState } from "react";

const usePagination = (defaultPage = 1, defaultPageSize = 10) => {
    const [pagination, setPagination] = useState({
        current: defaultPage,
        pageSize: defaultPageSize,
    });

    return {
        current: pagination.current,
        pageSize: pagination.pageSize,
        onChange: (page, pageSize) => setPagination({ current: page, pageSize }),
    };
}

export default usePagination;