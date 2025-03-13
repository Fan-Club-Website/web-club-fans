import newsPicture from '../assets/NewsPicture.jpg'
import Soon from '../components/soon';

function NewsPage() {
    return (
        <>
            <div className="max-h-screen overflow-hidden">
                <div>
                    <img 
                    className="max-w-screen"
                    src={newsPicture} alt="" />
                </div>
                <div className="relative ml-2 z-10 top-[-110vh]">
                    <Soon className="text-white"/>
                </div>
            </div>
        </>
    )
}

export default NewsPage;