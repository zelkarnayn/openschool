import ContentLoader from "react-content-loader"

const ArticleSceleton = () => (
    <ContentLoader
        id={'sceleton'}
        speed={2}
        width={350}
        height={250}
        viewBox="0 0 350 250"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="20" ry="20" width="350" height="250" />
    </ContentLoader>
)

export default ArticleSceleton