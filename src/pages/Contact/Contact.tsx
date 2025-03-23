import {Suspense, useState} from 'react';
import emailjs from '@emailjs/browser';
import {Canvas} from "@react-three/fiber";
import Loader from "../../components/Loader/Loader.tsx";
import Fox from "../../models/Fox.tsx";
import UseAlert from "../../hooks/useAlert.tsx";
import Alert from "../../components/Alert/Alert.tsx";


const Contact = () => {
    const {VITE_APP_EMAILJS_SERVICE_ID, VITE_APP_EMAILJS_TEMPLATE_ID, VITE_APP_EMAILJS_PUBLIC_KEY} = import.meta.env;
    //const formRef = useRef(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState('idle');
    const { alert, showAlert, hideAlert } = UseAlert();

    const handleChange = (e: any): void => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };

    const handleFocus = () => setCurrentAnimation('walk');
    const handleBlur = () => setCurrentAnimation('idle');
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation('hit');

        emailjs.send(
            VITE_APP_EMAILJS_SERVICE_ID,
            VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: 'Scriptly Labs',
                from_email: form.email,
                message: form.message,
            },
            VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            showAlert({text: 'Message envoyé avec succès !', type: 'success'});

            setTimeout(() => {
                hideAlert();
                setCurrentAnimation('idle');
                setForm({name: '', email: '', message: ''});
            }, 2000)

        }).catch((error: any) => {
            setIsLoading(false);
            setCurrentAnimation('idle')
            showAlert({text: 'Oops ! Impossible d\'envoyer le message', type: 'danger'});
            console.error('Failed to send message:', error);
        });
    };

    return (
        <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
            {alert.show && <Alert {...alert} />}
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">Entrez en contact</h1>

                <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
                    <label className="text-black-500 font-semibold">
                        Nom
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="John"
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}/>
                    </label>
                    <label className="text-black-500 font-semibold">
                        Email
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="john@gmail.com"
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}/>
                    </label>
                    <label className="text-black-500 font-semibold">
                        Votre message
                        <textarea
                            name="message"
                            className="textarea"
                            placeholder="Dites moi en quoi puis-je vous aider ! 🙃"
                            required
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}/>
                    </label>
                    <button
                        type="submit"
                        className="btn"
                        disabled={isLoading}
                        onFocus={handleFocus}
                        onBlur={handleBlur}>
                        {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>
                </form>
            </div>
            <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 75,
                        near: .1,
                        far: 1000
                    }}>
                    <directionalLight intensity={2.5} position={[0, 0, 1]} />
                    <ambientLight intensity={.5} />
                    <Suspense fallback={<Loader/>}>
                        <Fox
                            currentAnimation={currentAnimation}
                            position={[.5, .35, 0]}
                            rotation={[12.6, -.6, 0]}
                            scale={[.5, .5, .5]}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Contact;
