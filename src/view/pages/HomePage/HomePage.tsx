import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { HeaderLayout } from '@viewLayouts'
import { Content, TodoCard } from '@viewComponents'
import type { Todo } from '@types'

const mockedTodos = [
  {
    id: '6390c0e4-fff6-4ffb-b9a4-80f06258513d',
    title: 'Go to the beach',
    description: 'Plan a day to spend with friends in Las Teresitas. Remember to bring Spanish omelette sandwiches.',
    status: 'pending'
  },
  {
    id: '502992bc-7778-4c97-8725-36ae50f0f8dd',
    title: 'Watch the last of Thor',
    description: 'Buy the tickets in order to go to the cimena to wath Thor Love and Thunder.',
    status: 'pending'
  },
  {
    id: 'c758d66a-498d-4716-a7b0-107ce1c8ea3f',
    title: 'Start the stickers collection platform',
    description: 'Plan and create the prototypes for the platform, starting by the data model.',
    status: 'done'
  },
  {
    id: '20951ff4-300e-4c40-bf93-8f719be5a105',
    title: 'Restart reading the book of TypeScript',
    description: 'Refresh the point you left the book and keep going with it.',
    status: 'pending'
  }
]

const PageContent = () => {
  const [todos, setTodos] = useState<Todo[]>(mockedTodos)

  const markAsDone = (id: string) => {
    const todosCopy = [...todos].map(todo => todo.id === id ? { ...todo, status: 'done' } : todo)
    setTodos(todosCopy)
  }

  return (
    <HeaderLayout>
      <Content>
        <div className='relative flex justify-center w-full p-5 bg-white'>
          <ul className='md:w-full lg:w-3/5'>
            {todos.map(todo => (
              <li key={todo.id} className='pb-2'>
                <TodoCard todo={todo} callback={markAsDone} />
              </li>
            ))}
          </ul>
        </div>
      </Content>
    </HeaderLayout>
  )
}

export const HomePage = () => {
  const { status } = useSession({ required: true })

  return status === 'loading'
    ? <div>Loading...</div>
    : <PageContent />
}
