import {CheckCircle, Lock} from 'phosphor-react'
import {isPast, format} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
// import classNames from 'classnames';


interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class'
}

export function Lesson(props: LessonProps){
    const {aula} = useParams<{aula: string}>()
    
    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • ' d ' de ' MMMM ' • 'K'h'mm", {
        locale: ptBr
    })

    const isActiveLesson = aula == props.slug

    console.log('xu',isActiveLesson, aula, props.slug)

    return(
       <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

           
            <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
                'bg-green-500': isActiveLesson,
            })}>

                <header className="flex items-center justify-between ">
                   {isLessonAvailable ? ( 
                    <span className={classNames('flex items-center gap-2 text-sm font-medium', {
                        'text-white': isActiveLesson,
                        'text-blue-500': !isActiveLesson
                    })}>
                        <CheckCircle size={20} />
                        Conteúdo liberado
                    </span> ) : (
                         <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                         <Lock size={20} />
                         Em Breve
                     </span> 
                    )}
                    <span className={classNames('text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold', {
                       'border-white': isActiveLesson,
                       'border-green-300': !isActiveLesson
                    })}>
                        {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>  
                </header>

            <strong className={classNames(' mt-5 block', {
                'text-white':  isActiveLesson,
                'text-gray-200': !isActiveLesson
            })}>
               {props.title}
            </strong>

            </div>
       </Link>
    )
}