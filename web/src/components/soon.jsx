import { Link } from "react-router-dom";

function Soon({className = ''}) {
    return (
        <>
            <div className="flex h-screen gap-32">
                <div className="pl-2 pt-2">
                    <Link
                        to={'/welcome'}
                        className='bg-white pt-3 px-2 pb-1 self-start rounded-lg  '
                    >
                        <i className="fa fa-home fa-2x"
                        ></i>
                    </Link>
                </div>
                <div className="self-center">
                    <h1 className={`text-9xl ${className}`}>
                        Proximamente...
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Soon;