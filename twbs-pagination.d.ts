interface JQuery {
    twbsPagination(options: twbsPagination.options): JQuery;
}

declare namespace twbsPagination {
    interface options {
        totalPages?: number | null,
        startPage?: number | null,
        visiblePages?: number | null,
        initiateStartPageClick?: boolean | null,
        hideOnlyOnePage?: boolean | null,
        href?: boolean | null,
        pageVariable?: string | null,
        totalPagesVariable?: string | null,
        page?: string | null,
        first?: string | null,
        prev?: string | null,
        next?: string | null,
        last?: string | null,
        loop?: boolean | null,
        onPageClick?: Function | null,
        paginationClass?: string | null,
        nextClass?: string | null,
        prevClass?: string | null,
        lastClass?: string | null,
        firstClass?: string | null,
        pageClass?: string | null,
        activeClass?: string | null,
        disabledClass?: string | null,
        anchorClass?: string | null
    }
}