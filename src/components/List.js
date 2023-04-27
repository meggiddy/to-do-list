function List({ todos }) {
  return (
    <>
      <div>
        <ul className="divide-y divide-gray-100">
          {todos.map((task) => (
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4">
                {/* checkbox */}
                <input
                  type="checkbox"
                  className="appearance-none checked:bg-blue-500"
                ></input>
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading text-gray-900">
                    {task.title}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {task.deadline}
                  </p>
                  <p className="">{task.time}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default List;
