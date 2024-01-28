type pageProps = {
    children?: any

}
function PageContainer({ children }: pageProps) {
    return (
        <div className='page_cont'>
            {children}
        </div>
    )
}

export default PageContainer