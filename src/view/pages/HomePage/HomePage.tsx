import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { todoServices } from '@viewServices'
import { HeaderLayout } from '@viewLayouts'
import { Content, TodoCard } from '@viewComponents'
import type { Todo } from '@types'

const PageContent = () => {
  // const [todos, setTodos] = useState<Todo[]>([])
  const { data: todos } = useSWR<Todo[]>('/api/todos', todoServices.getAll)

  // useEffect(() => {
  //   const requestData = async () => {
  //     const { data: todos } = useSWR<Todo[]>('/api/todos', await todoServices.getAll())
  //     setTodos(todos || [])
  //   }

  //   requestData()
  // }, [])

  const markAsDone = async (id: string) => {
    // const todosCopy = [...todos].map(todo => todo.id === id ? { ...todo, status: 'done' } : todo)
    // setTodos(todosCopy)
    console.log(`Setting as done to task ${id}`)
    // await todoController.markAsDone(id)
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
