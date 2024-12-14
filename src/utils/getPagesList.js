export const getPagesList = (currentPage, totalPages) => {
    const pagesList = []

    if (currentPage !== 1) {
        pagesList.push(currentPage - 1)
    }

    pagesList.push(currentPage)

    if (currentPage !== totalPages) {
        pagesList.push(currentPage + 1)
    }

    if (currentPage <= 3 || (currentPage > 3 && currentPage < totalPages - 2)) {
        if (currentPage === 1) {
            pagesList.push(3)
        }
        pagesList.push('dot')
        pagesList.push(totalPages)
        if (currentPage === 3) {
            pagesList.unshift(1)
        }
    }

    if (currentPage >= totalPages - 2 || (currentPage > 3 && currentPage < totalPages - 2)) {
        if (currentPage === totalPages) {
            pagesList.unshift(totalPages - 2)
        }
        pagesList.unshift('dot')
        pagesList.unshift(1)
        if (currentPage === totalPages - 2) {
            pagesList.push(totalPages)
        }
    }

    return pagesList.map((page, index) => {
        return { id: page === 'dot' ? `dot${index}` : `${page}`, page: `${page}`, isCurrent: page === currentPage }
    })
}


// {
//     page: '1',
//     isCurrent: true
// }

// // console.log("1", getPagesList(2, 2))
// console.log("2", getPagesList(2, 59))
// console.log("3", getPagesList(3, 59))
// console.log("5", getPagesList(5, 59))
// console.log("25", getPagesList(25, 59))
// console.log("57", getPagesList(57, 59))
// console.log("58", getPagesList(58, 59))
// console.log("59", getPagesList(59, 59))