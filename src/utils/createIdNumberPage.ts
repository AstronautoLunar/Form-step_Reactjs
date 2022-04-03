function createIdNumberPage(idParams: string | undefined): string {
    if (idParams) {
        const idNumberPage = idParams?.split('')[1];

        return idNumberPage;
    } else {
        throw new Error('Página não encontrada');
    }
}

export default createIdNumberPage;
