import React from 'react'
import ferramentas from '../imagens/ferramentas.jpg'
import HomeFooter from './Components/HomeFooter'
import {motion} from 'framer-motion'
function SobreNos() {
  
  return (
    <div className='flex flex-col'>
    <div className='h-screen '>
      <div className='h-screen w-full  absolute z-[-20] '>
        <img className='w-full h-full object-cover' src={ferramentas} alt='ferramentas' />
      </div>

      <div className='w-full absolute h-screen bg-black/25'/>

      <motion.div
              initial={{
            x:-500,
            opacity:0,
        }}
        whileInView={{  x: 0,
          opacity:1,}}
          transition={{ duration: 1 }}
           className='md:w-[570px] md:mx-8 md:my-4 md:absolute bg-slate-800/75 md:h-[515px]'>
    <div className='w-full h-full lg:relative flex flex-col'>

      <p className='text-white md:absolute left-6 top-6 m-5 md:m-0 font-bold'>Sobre Nós</p>
    
      <div className='md:absolute left-2 top-16 md:top-[80px] m-2 lg:m-0 md:w-[526px] md:left-6 '>
              <p className='text-white font-extrabold pb-4 fon-sans text-xl md:text-3xl '
        >Um pouco da nossa história</p>
        <p className='text-white text-md text-start md:text-lg'
        >Nossa história começou há mais de uma década, quando a Dra. Karina decidiu abrir sua própria clínica dentária. Ela sempre sonhou em ter um espaço onde pudesse oferecer um atendimento personalizado e de qualidade aos seus pacientes.
         Com muito trabalho e dedicação, a clínica cresceu e se tornou uma referência na região.  A Dra. Karina investiu em tecnologia de ponta e em uma equipe de profissionais capacitados, que compartilham do mesmo compromisso em proporcionar um atendimento humanizado e de excelência.
          Nosso objetivo é cuidar da sua saúde bucal de forma integral, com tratamentos individualizados e um acompanhamento contínuo. Valorizamos a confiança que nossos pacientes depositam em nós e nos esforçamos para oferecer sempre o melhor em cada atendimento.</p>
      </div>
    </div>
      </motion.div>
    </div>

    
    <footer>
      <HomeFooter/>
    </footer>
      
    </div>
  )
}

export default SobreNos