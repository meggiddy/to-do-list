import {AiOutlineCheck} from 'react-icons/ai';
function List({ todos, setTodos }) {
  const incompleteTasks = todos.filter((task) => task.status === "incomplete");
  const completeTasks = todos.filter((task) => task.status === "complete");

  return (
    <>
      <div className="m-4">
        <h3 className="text-xl font-semibold leading-9 text-gray-900">
          Pending Tasks
        </h3>
        <hr className="border-gray" />
        {incompleteTasks.length === 0 && <p className=" m-10 text-sm font-semibold leading-5 text-gray-500">🎉 All Tasks Completed!</p>}
        <ul className="flex md:flex-cols-2 justify-center">
          {incompleteTasks.map((task) => (
            <>
            <li key={task.title} className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4">
                <input
                  type="checkbox"
                  className="m-4 checked:bg-blue-500"
                  onChange={() => {
                    const updatedTodos = todos.map((t) => {
                      if (t.id === task.id) {
                        return { ...t, status: "complete" };
                      } else {
                        return t;
                      }
                    });
                    setTodos(updatedTodos);
                  }}
                ></input>
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-5 text-gray-900">
                    {task.title}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {task.deadline}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {task.time}
                  </p>
                </div>
              </div>
            </li></>
          ))}
        </ul>
      </div>
      <div className="m-4">
        <h3 className="text-xl font-semibold leading-9 text-gray-900">
          Complete Tasks
        </h3>
        <hr className="border-gray" />
        <ul className="flex md:flex-cols-2 justify-center gap-6">
          {completeTasks.map((task) => (
            <>
            <AiOutlineCheck className='mt-10' />
            <li key={task.title} className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-5 text-gray-900">
                    {task.title}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {task.deadline}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {task.time}
                  </p>
                </div>
              </div>
            </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default List;
