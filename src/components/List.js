import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function List({ todos, setTodos, setSuccessImage, setHeroImage }) {
  const incompleteTasks = todos.filter((task) => task.status === "incomplete");
  const completeTasks = todos.filter(
    (task) => task.status === "complete" && new Date(task.deadline) > new Date()
  );
  const overDueTasks = todos.filter(
    (task) => new Date(task.deadline) > new Date()
  );
  const handleCheckboxChange = (taskId) =>{
    const updatedTodos = todos.map((t)=>{
      if (t.id === taskId) {
        return { ...t, status: "complete" };
      } else {
        return t;
      }
    });
    setTodos(updatedTodos);
    setHeroImage("images/completed.gif");
    setSuccessImage(true);
    setTimeout(() => {
      setHeroImage("images/cute.gif");
      setSuccessImage(false);
    }, 3000);
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="m-4 md:w-1/2 bg-white/20 p-4 rounded">
        <h3 className="text-xl font-semibold leading-9 text-gray-900">
          Pending Tasks
        </h3>
        <hr className="border-gray" />
        {incompleteTasks.length === 0 && (
          <p
            key={"success"}
            className="m-20 text-sm font-semibold leading-5 text-gray-500"
          >
            🎉 All Tasks Completed!
          </p>
        )}
        <ul className="flex md:flex-cols-2 justify-center">
          {incompleteTasks.map((task) => (
            <div key={task.title}>
              <li
                className={`flex justify-between gap-x-6 py-5 ${
                  new Date(task.deadline) < new Date() ? "overdue" : ""
                }`}
              >
                <div className="flex gap-x-4">
                  <input
                    type="checkbox"
                    className="m-4 checked:bg-blue-500"
                    onChange={() => {
                      handleCheckboxChange(task.id)
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
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="m-4 md:w-1/2 bg-white/30 p-4 rounded">
        <h3 className="text-xl font-semibold leading-9 text-gray-900">
          Complete Tasks
        </h3>
        <hr className="border-gray" />
        <ul className="flex md:flex-cols-2 justify-center gap-6">
          {completeTasks.map((task) => (
            <div key={task.title} className="flex">
              <AiOutlineCheck className="mt-10 mr-4" />
              <li className="flex justify-between gap-x-6 py-5">
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
            </div>
          ))}
        </ul>
      </div>
      <div className="m-4 md:w-1/2 bg-white/30 p-4 rounded">
        <h3 className="text-xl font-semibold leading-9 text-gray-900">
          OverDue Tasks
        </h3>
        <hr className="border-gray" />
        <ul className="flex md:flex-cols-2 justify-center gap-6">
          {overDueTasks.map((task) => (
            <div key={task.title} className="flex">
              <AiOutlineClose className="mt-10 mr-4" />
              <li className="flex justify-between gap-x-6 py-5">
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
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
