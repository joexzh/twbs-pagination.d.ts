interface JQuery {
    twbsPagination(options: twbsPagination.options): JQuery;
}

declare namespace twbsPagination {
    interface options {
        totalPages?: number,
        startPage?: number,
        visiblePages?: number,
        initiateStartPageClick?: boolean,
        hideOnlyOnePage?: boolean,
        href?: boolean,
        pageVariable?: string,
        totalPagesVariable?: string,
        page?: string,
        first?: string,
        prev?: string,
        next?: string,
        last?: string,
        loop?: boolean,
        onPageClick?: Function,
        paginationClass?: string,
        nextClass?: string,
        prevClass?: string,
        lastClass?: string,
        firstClass?: string,
        pageClass?: string,
        activeClass?: string,
        disabledClass?: string,
        anchorClass?: string
    }
}

