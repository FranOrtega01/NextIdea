export const noticiasFetch= (noticias) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(noticias)
        }, 1000);
    })
}