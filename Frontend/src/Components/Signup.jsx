import React from 'react'

function Signup() {
   return (
    <div className="min-h-screen flex justify-center items-start pt-24">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">signup</h1>
        <form className="flex flex-col gap-5">
          <input type="text" className="border p-2 rounded" placeholder="first name"/>
          <input type="text" className="border p-2 rounded" placeholder="last name"/>
          <input type="text" className="border p-2 rounded" placeholder="e-mail"/>
          <input type="password" className="border p-2 rounded" placeholder="passowrd"/>
          <button type="submit"  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">signup </button>
        </form>
      </div>

    </div>
  );
}

export default Signup