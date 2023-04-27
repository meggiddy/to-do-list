function AddTask({ heroImage, newTask, handleChange, handleSubmit }) {
 
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex items-center sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="w-48 h-48" alt="" src={heroImage}></img>
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
                  name="deadline"
                  value={newTask.deadline}
                  onChange={handleChange}
                  placeholder="Deadline"
                  className="text-gray-400 w-full border-2 border-gray-400 p-2 rounded-lg"
                />
                <input
                  type="time"
                  name="time"
                  value={newTask.time}
                  onChange={handleChange}
                  placeholder="time"
                  className="text-gray-400 w-full border-2 border-gray-400 p-2 rounded-lg"
                />
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
