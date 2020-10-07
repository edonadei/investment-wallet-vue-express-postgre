<template>
  <div>
    <Toolbar />
    <div class="flex flex-wrap justify-center">
      <div class="mt-10 w-11/12">
        <t-table
          variant="thin"
          :headers="['Stock', 'Shares', 'Value', 'Result']"
          :data="[
            ['Tesla', '10', 420, '+3%'],
            ['Twilio', '14.5', 130, '+6%'],
            ['AMD', '165.6', 78, '-15%'],
          ]"
        ></t-table>
      </div>
      <form>
        <div class="flex flex-wrap -mx-3 mb-2 mt-10">
          <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Stock
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Microsoft, Netflix, ..."
            />
          </div>
          <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Number of shares
            </label>
            <div class="relative">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                placeholder="10-100-1000"
              />
            </div>
          </div>
          <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Value
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              placeholder="400, 4000, ..."
            />
          </div>
          <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Result
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              placeholder="In %"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mt-6">
          <div class="md:w-4/5"></div>
          <div class="md:w-1/5">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Add my stock
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
const settings = {
  TTable: {
    classes: {
      table: 'shadow min-w-full divide-y divide-gray-200',
      tbody: 'bg-white divide-y divide-gray-200',
      td: 'px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700',
      theadTh:
        'px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider',
    },
    variants: {
      thin: {
        td: 'p-1 whitespace-no-wrap text-sm leading-4 text-gray-700',
        theadTh:
          'p-1 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider',
      },
    },
  },
}
Vue.use(VueTailwind, settings)

export default Vue.extend({})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
