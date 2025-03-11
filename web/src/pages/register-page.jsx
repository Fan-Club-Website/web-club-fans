import { useForm } from 'react-hook-form';
import loginPicture from '../assets/LoginPicture.jpg';
import { Link } from 'react-router-dom';


function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('Datos del formulario:', data);
        // Aquí puedes enviar los datos a tu API
    };

    return (
        <div className="relative h-screen overflow-x-hidden">
            <img
                src={loginPicture}
                className="h-[150vh] absolute inset-0 w-full justify-self-center"
            />
            <div className='z-10 top-8 relative left-2'>
                <Link
                    to={'/'}
                    className='bg-white pb-1 p-3 rounded-lg  '
                >
                    <i class=" fa fa-home fa-2x"
                    ></i>
                </Link>
            </div>
            <div className="relative z-10 mt-25 h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6 text-center">Registro</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                        {/*User identification */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Nombre Completo
                                </label>
                                <input
                                    {...register('fullname', { required: 'Obligatorio' })}
                                    type="text"
                                    placeholder="Tu nombre completo"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.fullname && (
                                    <span className="text-red-500 text-xs">{errors.fullname.message}</span>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Teléfono
                                </label>
                                <input
                                    {...register('phone', { required: 'Obligatorio' })}
                                    type="tel"
                                    placeholder="Tu teléfono"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.phone && (
                                    <span className="text-red-500 text-xs">{errors.phone.message}</span>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    DNI
                                </label>
                                <input
                                    {...register('dni', { required: 'Obligatorio' })}
                                    type="text"
                                    placeholder="Tu DNI"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.dni && (
                                    <span className="text-red-500 text-xs">{errors.dni.message}</span>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Nickname
                                </label>
                                <input
                                    {...register('nickname', { required: 'Obligatorio' })}
                                    type="text"
                                    placeholder="Tu nickname"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.nickname && (
                                    <span className="text-red-500 text-xs">{errors.nickname.message}</span>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Correo Electrónico
                                </label>
                                <input
                                    {...register('email', {
                                        required: 'Obligatorio',
                                        pattern: { value: /^\S+@\S+$/i, message: 'Correo inválido' },
                                    })}
                                    type="email"
                                    placeholder="correo@ejemplo.com"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-xs">{errors.email.message}</span>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <input
                                    {...register('password', {
                                        required: 'Obligatorio',
                                        minLength: { value: 6, message: 'Mínimo 6 caracteres' },
                                    })}
                                    type="password"
                                    placeholder="Contraseña"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.password && (
                                    <span className="text-red-500 text-xs">{errors.password.message}</span>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Fecha de Nacimiento
                                </label>
                                <input
                                    {...register('birthday', { required: 'Obligatorio' })}
                                    type="date"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.birthday && (
                                    <span className="text-red-500 text-xs">{errors.birthday.message}</span>
                                )}
                            </div>
                        </div>

                        {/* Adress Section */}
                        <div className="border-t pt-4">
                            <h2 className="text-xl font-semibold mb-4">Dirección</h2>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">País</label>
                                    <input
                                        {...register('address.country', { required: 'Obligatorio' })}
                                        type="text"
                                        placeholder="País"
                                        className="mt-1 block w-full border px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    {errors.address?.country && (
                                        <span className="text-red-500 text-xs">{errors.address.country.message}</span>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Provincia</label>
                                    <input
                                        {...register('address.province', { required: 'Obligatorio' })}
                                        type="text"
                                        placeholder="Provincia"
                                        className="mt-1 block w-full border px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    {errors.address?.province && (
                                        <span className="text-red-500 text-xs">{errors.address.province.message}</span>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Ciudad</label>
                                    <input
                                        {...register('address.city', { required: 'Obligatorio' })}
                                        type="text"
                                        placeholder="Ciudad"
                                        className="mt-1 block w-full border px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    {errors.address?.city && (
                                        <span className="text-red-500 text-xs">{errors.address.city.message}</span>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Código Postal</label>
                                    <input
                                        {...register('address.postcode', { required: 'Obligatorio' })}
                                        type="text"
                                        placeholder="Código Postal"
                                        className="mt-1 block w-full border px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    {errors.address?.postcode && (
                                        <span className="text-red-500 text-xs">{errors.address.postcode.message}</span>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Calle</label>
                                    <input
                                        {...register('address.street', { required: 'Obligatorio' })}
                                        type="text"
                                        placeholder="Calle"
                                        className="mt-1 block w-full border px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    {errors.address?.street && (
                                        <span className="text-red-500 text-xs">{errors.address.street.message}</span>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Piso</label>
                                    <input
                                        {...register('address.floor')}
                                        type="text"
                                        placeholder="Piso"
                                        className="mt-1 block w-full border px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Puerta</label>
                                    <input
                                        {...register('address.door')}
                                        type="text"
                                        placeholder="Puerta"
                                        className="mt-1 block w-full border px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-[hsl(326,90%,28%)] hover:bg-[hsl(327,76%,18%)] text-white font-bold rounded-md focus:outline-none focus:ring-[hsl(320,100%,38%)]"
                            >
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;



