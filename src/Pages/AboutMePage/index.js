import React from 'react'
import Header from '../../Components/Header'
import './style.css'
import Image from '../../assets/perfil.jpeg'
export default function AboutPage() {
    const Informations = [
        {
            title: "Informações Pessoais",
            subtitle: "Nome: João Vitor De Lima Gonçalves",
            description: "Tenho 18 anos, sou estudante, atualmente matriculado na graduação em Análise e Desenvolvimento de sistemas no Centro universitário SENAC. "
        },
        {
            title: "ÁREA DE ATUAÇÃO",
            subtitle: "Desenvolvimento Web - Programação",
            description: "Já colaborei e desenvolvi algumas aplicações Full-Stack utilizando ReactJs para a construção do Front-End e para o Back-end, NodeJs com a construção De WebApis. A respeito de banco de dados tenho conhecimentos consideraveis em Mysql e conhecimento básico em Mongodb. "
        },
        {
            title: "Objetivo Atual",
            subtitle: "Conquistar minha primeira vaga como desenvolvedor",
            description: "Meu objetivo principal no momento além de continuar estudando e aprendendo novos conceitos é conseguir minha primeira vaga como desenvolvedor. Acredito que com os conhecimentos adquiridos já esteja apto a entrar no mercado de desenvolvedores."
        }
    ]
    return (
        <>
            <Header />
            <div className='ImagePerfil'>
                    <img src={Image} />
                    </div>
            <div className='ContainerCardInformations'>
                {Informations.map(({ title, subtitle, description }) => {
                    return (
                        <>
                            <div className='CardInformations'>
                                <section className='ContentInformations'>
                                    <h2>{title}</h2>
                                    <h3>{subtitle}</h3>
                                    <p>
                                        {description}
                                    </p>

                                </section>

                            </div>



                        </>
                    )
                })}


            </div>
        </>
    )
}
