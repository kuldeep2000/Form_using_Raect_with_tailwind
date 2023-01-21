import React from "react";
import './App.css';

export default function Registration() { 
    return (
      <div class="flex min-h-screen flex-col justify-center bg-gray-300 px-10 py-6 text-gray-800 antialiased sm:py-12">
      <div class="relative px-60 py-3 text-center sm:max-w-8xl">
        <div class="relative mt-4 bg-white text-left shadow-md sm:rounded-lg">
          <div class="h-2 rounded-t-md bg-gray-700"></div>
          <div class="py-6 px-20">
          
            <form >
              <div class="mb-6 grid gap-6">
                <div>
                  <label for="first_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-black">Name</label>
                  <input type="text" id="first_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="abc" required />
                </div>
    
                <div>
                  <label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-black">Email address</label>
                  <input type="email" id="email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="abc@company.com" required />
                </div>
    
                <div>
                  <label for="phone" class="mb-2 block text-sm font-medium text-gray-900 dark:text-black">Phone number</label>
                  <input type="tel" id="phone" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="0123-4567890" pattern="[0-9]{4}-[0-9]{7}" required />
                </div>
    
                <div>
                  <label for="gender" class="mb-2 block text-sm font-medium text-gray-900 dark:text-black">Gender</label>
                  <div class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" required>
                  <div class="flex" >
                    <div class="mr-4 flex items-center">
                      <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600" />
                      <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-400">Male</label>
                    </div>
                    <div class="mr-4 flex items-center">
                      <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600" />
                      <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Female</label>
                    </div>
                  </div>
                  </div>
                  
                </div>
    
                <div>
                  <label for="age" class="mb-2 block text-sm font-medium text-gray-900 dark:text-black">Age</label>
                    <select name='Age' style={{fontSize:15,color:"#a3a8a6",backgroundColor: '#33394d',border: '1px', borderRadius: '10px',padding:5,width:160,height:40}}>
                      <option hidden selected>Select Age</option>

                      <option value="18-25">18-25</option>

                      <option value="26-35">26-35</option>

                      <option value="35-45">35-45</option>

                      <option value="46+">46+</option>

                    </select>
                </div>
                
                

                
                
                
                <div>
                  <label for="message" class="mb-2 block text-sm font-medium text-gray-900 dark:text-black">Comments</label>
                  <textarea id="message" rows="6" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Add Comments..." required />
                </div>
              </div>
    
              
              
              <div style={{ display: "flex" }}>
              <button type="submit" class="w-full rounded-lg bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-auto">Submit</button>
              <button type="reset" style={{ marginLeft: "auto" }} class="w-full rounded-lg bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-auto">Reset</button>
              </div>

              
              
            </form>
          </div>
        </div>
      </div>
    </div>
    
    );
}