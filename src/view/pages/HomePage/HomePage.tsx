import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { todoServices } from '@viewServices'
import { HeaderLayout } from '@viewLayouts'
import { Content, TodoCard } from '@viewComponents'
import type { Todo } from '@types'

const PageContent = () => {
  const { data: retrievedTodos } = useSWR<Todo[]>('/api/todos', todoServices.getAll)
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    setTodos(retrievedTodos || [])
  }, [retrievedTodos])

  const markAsDone = async (id: string) => {
    const updatedTodo = await todoServices.markAsDone(id)
    if (updatedTodo) {
      const newTodos = todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
      setTodos(newTodos)
    }
  }

  return (
    <HeaderLayout>
      <Content>
        <div className='relative flex justify-center w-full p-5 bg-white'>
          <ul className='md:w-full lg:w-3/5'>
            {todos && todos.map(todo => (
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
