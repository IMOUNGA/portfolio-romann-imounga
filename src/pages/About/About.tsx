import {skills, experiences} from "../../constants";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Cta from "../../components/CTA/cta.tsx";

const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">Salut, moi c'est <span
                className="blue-gradient_text font-semibold drop-shadow">Romann</span></h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>Ingénieur logiciel basé en France, spécialiste dans le développement de logiciels web et
                    d'applications mobiles.</p>
            </div>

            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">Compétences</h3>
                <h3 className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill) => (
                        <div className="block-container w-20 h-20">
                            <div className="btn-back rounded-xl"/>
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain"/>
                            </div>
                        </div>
                    ))}
                </h3>
            </div>

            <div className="py-16">
                <h3 className="subhead-text">Expériences professionnelles</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>Mon expérience avec plusieurs entreprises m'a permis de développer mes compétences techniques et
                        d'interagir avec de nombreuses personnes, ce qui m'a également permis de renforcer mes
                        compétences relationnelles.</p>
                </div>

                <div className="mt-12 flex">
                    <VerticalTimeline>
                        {experiences.map((experience) => (
                            <VerticalTimelineElement
                                key={experience.compagny_name}
                                date={experience.date}
                                icon={
                                    <div className="flex justify-center items-center w-full h-full">
                                        {experience.icon && (
                                            <img
                                                src={experience.icon}
                                                alt={experience.compagny_name}
                                                className="w-[60%] h-[60%] object-contain"/>
                                        )}
                                    </div>
                                }
                                iconStyle={{background: experience.iconBg}}
                                contentStyle={{
                                    borderBottom: '8px',
                                    borderStyle: 'solid',
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: 'none',
                                }}>
                                <div>
                                    <h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>
                                    <p className="text-black-500 font-medium font-base">{experience.compagny_name}</p>
                                    <p className="text-gray-400 text-sm ">{experience.stack}</p>
                                </div>
                                <ul className="my-5 list-disc ml-5 space-y-2">
                                    {experience.points.map((point, index) => (
                                        <li className="text-black-500/50 font-normal pl-1 text-sm"
                                            key={index}>{point}</li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <hr className="border-slate-200"/>
            <Cta/>
        </section>
    );
};

export default About;
