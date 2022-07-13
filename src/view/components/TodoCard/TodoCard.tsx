import type { FC } from 'react'
import type { Todo } from '@types'
import { Protected, CheckIcon } from '@viewComponents'

interface Props {
  todo: Todo
  callback: (id: string) => void
}

export const TodoCard: FC<Props> = ({ todo, callback }) => (
  <div className={`flex flex-col justify-start p-5 border border-gray-300 rounded-md ${todo.status === 'done' ? 'bg-green-100' : ''}`}>
    <Protected roles={['user', 'manager', 'admin']} >
      <p className='text-lg font-bold'>{todo.title}</p>
    </Protected>
    <Protected roles={['manager', 'admin']} >
      <p className='text-md mt-3'>{todo.description}</p>
    </Protected>
    {
      todo.status !== 'done'
        ? <Protected roles={['admin']} >
          <button
            className='w-36 mt-3 p-1 rounded-md bg-green-200'
            onClick={() => callback(todo.id)}
          >
            Mark as done
          </button>
        </Protected>
        : <div className='flex mt-3 font-bold '><CheckIcon className='pr-1 w-6 h-6 text-green-400' /> Task done</div>
    }
    {/* {
      todo.status !== 'done'
        ? <button
          className='w-36 mt-3 p-1 rounded-md bg-green-200'
          onClick={() => callback(todo.id)}
        >
            Mark as done
        </button>
        : <div className='flex mt-3 font-bold '><CheckIcon className='pr-1 w-6 h-6 text-green-400' /> Task done</div>
    } */}
  </div>
)
