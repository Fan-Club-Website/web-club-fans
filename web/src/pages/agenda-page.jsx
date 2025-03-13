import Soon from "../components/soon";
import agendaPicture from "../assets/AgendaPicture.jpg"

function AgendaPage() {
    return (
        <>
            <div className="max-h-screen overflow-hidden">
                <div>
                    <img 
                    className="max-w-screen"
                    src={agendaPicture} alt="" />
                </div>
                <div className="relative ml-2 z-10 top-[-110vh]">
                    <Soon className="text-white"/>
                </div>
            </div>
        </>
    )
}

export default AgendaPage;