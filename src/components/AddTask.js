import gif from "./images/cute.gif";
function AddTask({ newTask, handleChange, handleSubmit }) {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="" src={gif}></img>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9">
            Add a Task
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w.full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="">
                <input
                  name="title"
                  type="text"
                  value={newTask.title}
                  onChange={handleChange}
                  placeholder="Task title"
                  className="w-full border-2 border-gray-300 p-2 rounded-lg"
                />
                <input
                  type="date"
                  name="Deadline"
                  value={newTask.deadline}
                  onChange={handleChange}
                  placeholder="Deadline"
                  className="w-full border-2 border-gray-300 p-2 rounded-lg"
                />
                <input
                  type="time"
                  name="Time"
                  value={newTask.time}
                  onChange={handleChange}
                  placeholder="time"
                  className="w-full border-2 border-gray-300 p-2 rounded-lg"
                />
                <select
                  name="status"
                  value={newTask.status}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 p-2 rounded-lg"
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </select>
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add to List
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTask;
